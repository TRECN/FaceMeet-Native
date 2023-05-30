import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';

import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
type Props = {};

const GradientText = (props: Props) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={['#0099ff', 'blue']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text {...props} style={[props.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
};

const Home = ({navigation}: any) => {
  const [name, setName] = useState<string>('Rishabh');
  const [signInTab, setSignInTab] = useState(false);
  const [signUpTab, setSignUpTab] = useState(false);
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')

  const [secureTxt,setSecureTxt] = useState(true)
  const uid = (name: string) => {
    return name + '_' + Date.now().toString();
  };



  const handleEnter = () => {
    navigation.replace('MainScreen', {
      name: name,
      Uid: uid(name),
    });
  };

  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        height: '100%',

        backgroundColor: '#000000',
      }}>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Icon name="meetup" size={200} color="#0099ff" />
        </View>
        <View style={{paddingVertical: 40, alignItems: 'center'}}>
          <GradientText style={{...styles.text, paddingBottom: 5}}>
            Welcome To
          </GradientText>

          <GradientText style={styles.text}>FACE MEET</GradientText>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableOpacity
              onPress={() => {
                setSignInTab(true);
              }}>
              <Text style={{fontSize: 20}}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 20}}> | </Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                setSignUpTab(true);
              }}>
              <Text style={{fontSize: 20}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={signInTab}
        onRequestClose={() => {
          setSignInTab(false)
          setSecureTxt(true)
        }}>
        <SafeAreaView>
          <View
            style={{
              backgroundColor: 'black',
              height: '100%',
              justifyContent: 'center',
            }}>
            <View style={{alignItems: 'center'}}>
              <Icon name="meetup" size={200} color="#0099ff" />
              <View>
                <Text
                  style={{
                    fontSize: 40,
                    marginVertical: 20,
                    marginHorizontal: 20,
                  }}>
                  SIGN IN
                </Text>
              </View>
              <View style={styles.enterName}>
                <TextInput
                  placeholder="Email Id"
                  placeholderTextColor="#0099ff"
                  style={styles.textbox}
                />
              </View>
              <View style={styles.enterName}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#0099ff"
                  style={styles.textbox}
                  secureTextEntry={secureTxt}
                  onChangeText={()=>{
                    setSecureTxt(true)
                  }}
                />
                <TouchableOpacity style={styles.eye} onPress={()=>{
                  setSecureTxt(!secureTxt)
                }}>
                <Icon1 name='eye'/>

                </TouchableOpacity>
              </View>
              <TouchableOpacity
              style={styles.RoomBtn}
              onPress={() => {
                handleEnter()
              }}>
              <Icon name="arrow-right" size={20} color="white" />
            </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={signUpTab}
        onRequestClose={() => {
          setSignUpTab(false)
          setSecureTxt(true)
        }}>
        <SafeAreaView>
          <View
            style={{
              backgroundColor: 'black',
              height: '100%',
              justifyContent: 'center',
            }}>
            <View style={{alignItems: 'center'}}>
              <Icon name="meetup" size={200} color="#0099ff" />
              <View>
                <Text
                  style={{
                    fontSize: 40,
                    marginVertical: 20,
                    marginHorizontal: 20,
                  }}>
                  SIGN UP
                </Text>
              </View>
              <View style={styles.enterName}>
                <TextInput
                  placeholder="UserName"
                  placeholderTextColor="#0099ff"
                  style={styles.textbox}
                />
              </View>
              <View style={styles.enterName}>
                <TextInput
                  placeholder="Email Id"
                  placeholderTextColor="#0099ff"
                  style={styles.textbox}
                />
              </View>
              <View style={styles.enterName}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#0099ff"
                  style={styles.textbox}
                  secureTextEntry={secureTxt}
                  onChangeText={()=>{
                    setSecureTxt(true)
                  }}
                />
                <TouchableOpacity style={styles.eye} onPress={()=>{
                  setSecureTxt(!secureTxt)
                }}>
                <Icon1 name='eye'/>

                </TouchableOpacity>
              </View>
              <TouchableOpacity
              style={styles.RoomBtn}
              onPress={() => {
                // handleEnter()
              }}>
              <Icon name="arrow-right" size={20} color="white" />
            </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  enterName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 40,
    backgroundColor: '#181818',
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  textbox: {
    width: '100%',
    fontSize: 20,
  },
  RoomBtn: {
    padding: 10,
    backgroundColor: '#0099ff',
    borderRadius: 1000,
  },
  eye:{
    position:'absolute',
    padding:10,
    right:20,
    zIndex:1
  }
});
