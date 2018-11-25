import React from 'react';
import { Component, StyleSheet, Image } from 'react-native';
import { View, Text, ScrollView } from 'react-native';
import Button from 'react-native-button';

export default class EmployeeProfile extends React.Component {
  static navigationOptions = {
    title: 'Employee Profile',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
        <ScrollView>
      <View style={styles.container}>
      <View style={{display: 'flex', height: 140, width: 120}}>
          <Image style={styles.profileImage} source={require('../../assets/profile1.png')}></Image>
          <Text style={{paddingLeft: 40}}>Priya</Text>
          </View>
          <View style={styles.textContainer}>
              <Text>Job Category: 
                  cooking 200INR, cleaning 100INR</Text>
              <Text>Avg Score: 4.5/5</Text>
              <Text>Location: Mumbai</Text>
              <Text>Time: 9:00 - 14:00</Text>
          </View>
          <Button
        containerStyle = {styles.button}
        style={styles.text}
          onPress={() => this.props.navigation.navigate('Chat')}>Start Conversation</Button>
        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  button: {
    backgroundColor: '#003399',
        height: 60,
        width: 250,
        color: 'white',
        padding: 20,
        margin: 20,
        textAlign: 'center',
        overflow:'hidden', borderRadius:12
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  profileImage: {
    height: 100,
     width: 100, 
     borderRadius: 50, 
     margin: 8
  },
  textContainer: {
    fontSize: 12,
    display: 'flex',
    height: 120,
    width:160,
    justifyContent: 'space-evenly',
    textAlign: 'center'
  }
});
