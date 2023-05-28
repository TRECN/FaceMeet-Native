import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ZegoUIKitPrebuiltVideoConference from '@zegocloud/zego-uikit-prebuilt-video-conference-rn'
type Props = {
  UserName:string,
  UserId:string,
  RoomName:string,
  RoomId:string
}
const AppID=978224315
const AppSign='1926c8f0a97957174f61c153eb39725c74da9c7dd7f8397bc84e25c64ef1d870'

const StartMeeting = ({UserName,UserId,RoomName,RoomId,navigation}: Props|any) => {
  return (
    <View style={styles.container}>
      
    <ZegoUIKitPrebuiltVideoConference
        appID={AppID}
        appSign={AppSign}
        userID={UserId} // userID can be something like a phone number or the user id on your own user system. 
        userName={UserName}
        conferenceID={RoomName} // conferenceID can be any unique string. 

        config={{
            onLeave: () => { navigation.navigate('MainScreen') },
        }}
    />
</View>
  )
}

export default StartMeeting

const styles = StyleSheet.create({
  container:{
    height:'100%'
  }
})