import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
const MainScreen = ({route, navigation}: any) => {
  const userMessage = [{id:1,name:'Rishabh'}, {id:2,name:'Raj'},{id:3,name:'Tarun'},{id:4,name:'Parvej'}];

  console.log(route.params.name);
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={styles.name}>H!, {route.params.name} 👋</Text>
      <Icon name="meetup" size={50} color="#0099ff" />
      </View>

      <View style={styles.start}>
        <View>
          <Text style={styles.startT1}>New Conference</Text>
        </View>
        <View>
          <Text style={styles.startT2}>Create Conference URL</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.startBtn} onPress={()=>{
            navigation.push('Room',{
              name:route.params.name,
              Uid:route.params.Uid,
            })
          }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Start Meeting
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.join}>
        <TouchableOpacity style={styles.joinM}>
          <Icon name="video-camera" size={40} color={'white'} />
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Join Meeting
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.schedule}>
          <Icon name="calendar" size={40} color={'white'} />
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Schedule Meeting
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        
      </View>

      <View>
        <Text style={{fontSize:30, color:'white',marginBottom:15}}>Invites</Text>
        <View style={styles.start}>
        <View>
          <Text style={styles.startT1}>Team Meeting</Text>
        </View>
        <View>
          <Text style={styles.startT2}>May 27, 2023</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.startBtn}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Join Meeting
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
      <View>
      <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>Messages</Text>
          <Text style={{fontSize: 20, color: '#4169E1'}}>See all</Text>
        </View>
        <View>
        <ScrollView style={{marginTop: 10,height:200}}>
        {userMessage.map(user => (
          <View style={styles.msgUser} key={user.id}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.userMsgI}>
                <Icon name="user" size={30} color={'white'} />
              </View>
              <Text style={{fontSize: 20}}>{user.name}</Text>
            </View>
            <AntDesign name="message1" size={30} />
          </View>
        ))}
      </ScrollView>
        </View>
     
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  name: {
    fontSize: 40,
    marginBottom: 20,
    color: 'white',
  },
  start: {
    borderRadius: 25,
    backgroundColor: '#18181f',
    padding: 20,
    marginBottom: 20,
  },
  startT1: {
    fontSize: 30,
    marginBottom: 5,
    color: 'white',
  },
  startT2: {
    fontSize: 17,
    marginBottom: 20,
    color: 'white',
  },
  startBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0099ff',
    borderRadius: 15,
  },
  join: {
    flexDirection: 'row',
    borderColor: 'red',
    paddingVertical: 20,
    justifyContent: 'space-evenly',
    gap: 20,
  },
  joinM: {
    backgroundColor: '#00CED1',
    padding: 20,
    gap: 10,
    borderRadius: 20,
    width: '50%',
  },
  schedule: {
    backgroundColor: '#0099ff',
    padding: 20,
    gap: 10,
    borderRadius: 20,
    width: '50%',
  },
  msgUser: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: '#18181f',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  userMsgI: {
    backgroundColor: '#0099ff',
    color: 'white',

    borderRadius: 1000,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
});
