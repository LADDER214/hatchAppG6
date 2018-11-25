import React from 'react';
import { Component, StyleSheet, Image } from 'react-native';
import { View, Text } from 'react-native';
import Button from 'react-native-button';

export default class EmployerHome extends React.Component {
  static navigationOptions = {
    title: 'Select Service',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text style= {{textAlign: 'center'}}>What type of domestic service are you seeking?</Text>
      <View style={styles.subContainer}>
        <Button
          style = {{color: 'white',fontSize: 14}}
          containerStyle = {styles.button}
          onPress={() => this.props.navigation.navigate('FindEmployees')}>Laundry
        </Button>
        <Button
          style = {{color: 'white', fontSize: 14}}
          containerStyle={styles.button}
          onPress={() => this.props.navigation.navigate('FindEmployees')}>Dry Cleaning
          {/* <Image style={{height: 50, width: 50, tintColour: '#fff', color: '#fff'}}  */}
          {/* source = {require('./assets/dry-cleaning.png')}></Image> */}
        </Button>
      </View>
      <View style={styles.subContainer}>
          <Button
          style = {{color: 'white', fontSize: 14}}
        containerStyle={styles.button}
          onPress={() => this.props.navigation.navigate('FindEmployees')}>Cooking</Button>
          
          <Button
        containerStyle={styles.button}
        style = {{color: 'white', fontSize: 14}}
          onPress={() => this.props.navigation.navigate('FindEmployees')}>Housekeeping</Button>
      </View>
      <Text>There will also be a tab navigation bar along the bottom of the screen, where employees can toggle between
            screens: home(this page), messages from employees, employment offers (pending, in progress and closed),
            personal profile screen, favourite people (past or potential employees).
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
  subContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#003399',
    height: 100,
    width: 100,
    padding: 20,
    margin: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  }
});
