import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  const [name, setName] = useState<string>('');
  const [Uid, setUid] = useState<string>();
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
        <View style={{}}>
          <Icon name="meetup" size={200} color="#0099ff" />
        </View>
        <View style={{paddingVertical: 40}}>
          <GradientText style={styles.text}>FACE MEET</GradientText>
        </View>
        <View style={styles.enterName}>
          <TextInput
            placeholder="name"
            placeholderTextColor="#0099ff"
            style={styles.textbox}
            onChangeText={setName}
          />
          <TouchableOpacity
            onPress={() => {
              handleEnter();
            }}>
            <Icon name="arrow-right" size={20} color="#0099ff" />
          </TouchableOpacity>
        </View>
      </View>
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
  },
  textbox: {
    width: '100%',
    fontSize: 20,
  },
});
