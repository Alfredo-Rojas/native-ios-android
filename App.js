import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Loading from './src/screens/Loading';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
// import config from './src/common/constants.js';

const App = createStackNavigator(
  {
    Loading: { screen: Loading },
    SignUp: { screen: SignUp },
    Login: { screen: Login },
    Home: { screen: Home }
  },
  {
    initialRouteName: 'Loading'
  }
);

export default createAppContainer(App);