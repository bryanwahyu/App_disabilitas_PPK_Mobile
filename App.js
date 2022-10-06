import React, { Component, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import SplashScreen from 'react-native-splash-screen';

import {
  StatusBar,
  Text,
  View,
} from 'react-native';

const Stack = createStackNavigator()

export class App extends Component {
  render () {
    useEffect( ()=> {
      SplashScreen.hide();
    }, [])
    return (
      <View>
        <Text>
          Hello World!!
        </Text>
      </View>
    )
  }
}

export default App;
