import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './AppNavigator';
import TabNavigator from './TabNavigator';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}
