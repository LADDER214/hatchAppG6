import React from 'react';
import { Component, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import Button from 'react-native-button';

export default class EmployeeHome extends React.Component {
  static navigationOptions = {
    title: 'Skills Upgrade Centre',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'}}>
        <Text>This will be the employee homepage. from here they will be able to see how much tip/bonus
            money they have saved so far, as well as a list of recommended skills/education courses they can 
            purchase with that money (as well as some free course as well). The courses listed will be tailored to 
            their current employment background as well as their personal preferences.
        </Text>
        <Text>There will also be a tab navigation bar along the bottom of the screen, where employees can toggle between
            screens: home(skills area), messages from employers, employment offers (pending, in progress and closed),
            personal profile.
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    button: {
      backgroundColor: '#003399',
      height: 90,
      width: 200,
      color: 'white',
      padding: 20,
      margin: 20,
      textAlign: 'center',
    },
    text: {
      color: 'white',
    }
  });
