import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';
import ZegoUIKitPrebuiltVideoConference from '@zegocloud/zego-uikit-prebuilt-video-conference-rn';
import {Swipeable} from 'reactnativeges';
import Ion from 'react-native-vector-icons/Ionicons';
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
  RoomId,
  navigation,
}: Props | any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Font name="arrow-circle-left" size={40} color={'#0099ff'} />
        </View>
        <View>
          <Text style={{color: 'white',fontSize:20}}>{RoomName}</Text>
        </View>
        <TouchableOpacity>
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
  }
});
