import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import StartMeeting from '../components/StartMeeting';
type Props = {};

const Room = ({route, navigation}: any) => {
  const UserName = route.params.name;
  const UserId = route.params.Uid;
  const [RoomName, setRoomName] = useState('');
  const [RoomId, setRoomId] = useState('');
  const [StartRoom, setStartRoom] = useState(false);

  return (
    <View style={styles.container}>
      {StartRoom ? (
        <View>
          <StartMeeting UserName={UserName} UserId={UserId} RoomName={RoomName} RoomId={RoomId} />
        </View>
      ) : (
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.name}>Create Room</Text>
            <Icon name="meetup" size={50} color="#0099ff" />
          </View>
          <View style={styles.meet}>
            <Icon name="users" size={100} color="#0099ff" />
          </View>
          <View style={styles.TextContainer}>
            <View style={styles.enterName}>
              <TextInput
                placeholder="Room Name"
                placeholderTextColor="#0099ff"
                style={styles.textbox}
                onChangeText={setRoomName}
              />
            </View>
            <TouchableOpacity
              style={styles.RoomBtn}
              onPress={() => {
                setRoomId(RoomName + '_' + Date.now().toString());
                setStartRoom(true);
              }}>
              <Icon name="arrow-right" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Room;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#000',
    padding: 30,
  },
  name: {
    fontSize: 40,
    marginBottom: 20,
    color: 'white',
  },
  meet: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbox: {
    width: '100%',
    fontSize: 20,
  },
  enterName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 40,
    backgroundColor: '#181818',
    paddingHorizontal: 30,
  },
  TextContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  RoomBtn: {
    padding: 10,
    backgroundColor: '#0099ff',
    borderRadius: 1000,
  },
});
