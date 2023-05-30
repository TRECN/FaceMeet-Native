const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors')

const app = express()
const port = 3000

//middleware
app.use(express.json())
app.use(cors())


//connecting to database
mongoose.connect('mongodb+srv://rishabh110303:justagame@cluster0.5crca3m.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to Database')
    })
    .catch((er) => {
        console.error('error connecting to Database', er)
    })

// User Model 

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

const User = mongoose.model('user', userSchema)

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // check if the username already exists
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ error: "Username already exists" })
        
        //encripting password
        const hashedPassword = await bcrypt.hash(password,10)

        //creating a new user
        const user = new User({
            username,
            email,
            password:hashedPassword,

        })

        //save the user to database
        await user.save()
        res.status(201).json({message:'User registered sucessfully'});

    }catch(er){
        res.status(500).json({error:'Internal server error'})
    }
})

app.post('/login',async(req,res)=>{
    try {
        const { email, password } = req.body;
    
        // Find the user in the database
        const user = await User.findOne({ email});
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        // Compare the provided password with the stored hash
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return res.status(401).json({ error: 'Invalid password' });
        }
    
        // Create and return a JSON Web Token (JWT)
        res.json({ username : user.username});
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }

      
})

app.get('/',(req,res)=>{
    res.send('welcome to auth')
})
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
  })
