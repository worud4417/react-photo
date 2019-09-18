import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './src/reducers/index'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './src/screens/LoginScreen'
import PhotoScreen from './src/screens/PhotoScreen'

const stackNavigator = createStackNavigator({
  photo:{
    screen:PhotoScreen
  }
})

const switchNavigator = createSwitchNavigator({
  login:{
    screen: LoginScreen
  },
  mainstack:{
    screen:stackNavigator
  }
})

const AppContainer = createAppContainer(switchNavigator);

export default class App extends React.Component{
  render(){return (
    <Provider store={createStore(reducers)}>
      <AppContainer></AppContainer>
    </Provider>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
