const mongoose = require('mongoose')

const URI="mongodb+srv://Rishabh1103:Justagame@cluster0.ofc9ccx.mongodb.net/AuthDB?retryWrites=true&w=majority"

const DbConnect= async()=>{
    try{
        await mongoose.connect(URI,{
            useNewUrlParser: true
        })
        console.log("DB Connected!!")
    }
    catch(e){
        console.log(e)
        throw e
    }
}
module.exports=DbConnect