import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import MainScreen from './screens/MainScreen';
import Room from './screens/Room';
type Props = {}
const Stack = createNativeStackNavigator()
const App = (props: Props) => {
  return (
    

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='MainScreen' component={MainScreen} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='Room' component={Room} options={{
          headerShown:false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>     
    
    
  )
}

export default App

const styles = StyleSheet.create({})