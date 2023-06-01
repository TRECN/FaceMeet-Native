import {StyleSheet, Text, View,TouchableOpacity ,Modal,ScrollView,TextInput} from 'react-native';
import React,{useState,useEffect} from 'react';
import ZegoUIKitPrebuiltVideoConference from '@zegocloud/zego-uikit-prebuilt-video-conference-rn';
// import {Swipeable} from 'reactnativeges';
import Ion from 'react-native-vector-icons/Ionicons';
import io from 'socket.io-client';

import Font from 'react-native-vector-icons/FontAwesome';
type Props = {
  UserName: string;
  UserId: string;
  RoomName: string;
  RoomId: string;
};
const AppID = 978224315;
const AppSign =
  '1926c8f0a97957174f61c153eb39725c74da9c7dd7f8397bc84e25c64ef1d870';

const StartMeeting = ({
  UserName,
  UserId,
  RoomName,
  navigation,
  message,
  setMessage,
  messages,
  setMessages,
  setActiveUsers
}: Props | any) => {

  var socket= io('http://192.168.107.7:3000');
  socket.emit('join-room', {name: UserName, roomId: RoomName});



  const handleSend = () => {
    if (message.trim() !== '') {
      // Send the message to the server
      const dt = Date.now;
      socket.emit('message', message, UserName, dt,RoomName);

      // Clear the input field
      setMessage('');
    }
  };

  useEffect(() => {
    console.log(UserName);
    socket.on('all-users', (users:any) => {
      console.log(`Active Users:Room Id ${users[0].RoomId}`);
      console.log(users);

      // setActiveUsers(users.map(ele => ele.userName));
    });
    socket.on('message',( newMessage:any )=> {
      setMessages((prevMessages:any) => [...prevMessages, newMessage]);
      console.log(messages);
    });
  }, []);

  const [chatOn,setChatOn]=useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={()=>{
            socket.disconnect()
            navigation.replace('MainScreen',{
              name:UserName,
              Uid:UserId
            })
          }
          
          }>
          <Font name="arrow-circle-left" size={40} color={'#0099ff'} />

          </TouchableOpacity>
        </View>
        <View>
          <Text style={{color: 'white',fontSize:20}}>{RoomName}</Text>
        </View>
        <TouchableOpacity onPress={()=>{
          setChatOn(true)
        }}>
          <Ion name="chatbubble-ellipses" size={40} color={'#0099ff'} />
          </TouchableOpacity>
      </View>
      <View style={styles.Video}>
        <ZegoUIKitPrebuiltVideoConference
          appID={AppID}
          appSign={AppSign}
          userID={UserId} // userID can be something like a phone number or the user id on your own user system.
          userName={UserName}
          conferenceID={RoomName} // conferenceID can be any unique string.
          config={{
            onLeave: () => {
              navigation.navigate('MainScreen');
            },
          }}
        />
      </View>
      <Modal
              animationType={"fade"}
              transparent={false}
              visible={chatOn}
              onRequestClose={() => {
                console.log("Modal has been closed.");
              }}
            >
              <View style={styles.modal}>
                <View style={styles.header}>
                  <View style={styles.back}>
                    <TouchableOpacity
                      onPress={() => {
                        setChatOn(false);
                      }}
                    >
                      <Font
                        name="arrow-left"
                        size={24}
                        color="black"
                        style={{ fontSize: 30, color: "white" }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.chatText}>
                    <View>
                      <Text style={{ color: "white", fontSize: 30 }}>CHAT</Text>
                    </View>
                  </View>
                </View>
                <ScrollView style={styles.ChatView}>
                  {/* {
                    console.log(messages)
                  } */}
                  
                  {messages.filter((item:any)=>item.roomId==RoomName).map((item:any, index:any) => (
                    <View key={index} style={styles.Chat}>
                      <View style={styles.TName}>
                        
                          <Text style={styles.TNameS}>{item.name}</Text>
                       
                      </View>
                      <View style={styles.TMessage}>
                        <Text style={styles.TMessageS}>{item.message}</Text>
                      </View>
                    </View>
                  ))}
                </ScrollView>
                <View style={styles.chats}>
                  <View>
                    <TextInput
                      placeholder="Message"
                      placeholderTextColor="#0099ff"
                      value={message}
                      onChangeText={setMessage}
                      style={styles.Message}
                    />
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        handleSend();
                      }}
                    >
                      <Font name="arrow-up" size={40} color="#0099ff" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          
    </View>
  );
};

export default StartMeeting;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  Video: {
    height: '100%',
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },modal: {
    backgroundColor: "#181818",
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  back: {
    position: "absolute",
    zIndex: 1,
  },
  chatText: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  chats: {
    borderRadius: 20,
    backgroundColor: "#121212",
    fontSize: 20,
    color: "white",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ChatView:{
    borderRadius:20,
    marginBottom:10
  },
  Chat:{
    flex:1,
    margin:10,
    backgroundColor:'#0099ff',
    justifyContent:'flex-start',
    borderRadius:20,

  },
  TName:{
    flex:1,
    fontSize:10,
    borderRadius:20,
    fontWeight:'bold'
    
  },
  TNameS:{
    paddingTop:10,
    marginLeft:20,
    borderRadius:20,
    color:'black',
    fontWeight:'bold',
    
    
  },
  TMessage:{
    padding:20,
    backgroundColor:'gray',
    borderRadius:20
  },
  TMessageS:{
    color:'white'
  },
  Message:{
    color:'white',
    fontSize:20
  }
});
