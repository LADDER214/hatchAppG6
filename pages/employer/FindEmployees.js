import React from 'react';
import { Component, StyleSheet, Image } from 'react-native';
import { View, Text, ScrollView } from 'react-native';
import Button from 'react-native-button';

export default class FindEmployees extends React.Component {
  static navigationOptions = {
    title: 'Find Employee',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
        <ScrollView>
      <View style={styles.container}>
      
        <Button
          style = {{color: 'white',fontSize: 14}}
          containerStyle = {styles.button}
          onPress={() => this.props.navigation.navigate('EmployeeProfile')}>
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
        </Button>
        <Button
          style = {{color: 'white', fontSize: 14}}
          containerStyle={styles.button}
          onPress={() => this.props.navigation.navigate('EmployeeProfile')}>
          <View style={{display: 'flex', height: 140, width: 120}}>
          <Image style={styles.profileImage} source={require('../../assets/profile1.png')}></Image>
          <Text style={{paddingLeft: 40}}>Anika</Text>
          </View>
          <View style={styles.textContainer}>
              <Text>Job Category: 
                  cooking 200INR, cleaning 100INR</Text>
              <Text>Avg Score: 4.5/5</Text>
              <Text>Location: Mumbai</Text>
              <Text>Time: 9:00 - 14:00</Text>
          </View>
        </Button>
          <Button
          style = {{color: 'white', fontSize: 14}}
        containerStyle={styles.button}
          onPress={() => this.props.navigation.navigate('EmployeeProfile')}>
          <View style={{display: 'flex', height: 140, width: 120}}>
          <Image style={styles.profileImage} source={require('../../assets/profile1.png')}></Image>
          <Text style={{paddingLeft: 40}}>Parvati</Text>
          </View>
          <View style={styles.textContainer}>
              <Text>Job Category: 
                  cooking 200INR, cleaning 100INR</Text>
              <Text>Avg Score: 4.5/5</Text>
              <Text>Location: Mumbai</Text>
              <Text>Time: 9:00 - 14:00</Text>
          </View>
          </Button>
          <Button
        containerStyle={styles.button}
        style = {{color: 'white', fontSize: 14}}
          onPress={() => this.props.navigation.navigate('EmployeeProfile')}>
          <View style={{display: 'flex', height: 140, width: 120}}>
          <Image style={styles.profileImage} source={require('../../assets/profile1.png')}></Image>
          <Text style={{paddingLeft: 40}}>Diya</Text>
          </View>
          <View style={styles.textContainer}>
              <Text>Job Category: 
                  cooking 200INR, cleaning 100INR</Text>
              <Text>Avg Score: 4.5/5</Text>
              <Text>Location: Mumbai</Text>
              <Text>Time: 9:00 - 14:00</Text>
          </View>
          </Button>
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
    backgroundColor: '#dcdfe5',
    height: 150,
    width: 290,
    padding: 10,
    margin: 10,
    borderRadius: 12,
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
    justifyContent: 'space-evenly'
  }
});
