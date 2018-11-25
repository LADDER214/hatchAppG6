import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Button from 'react-native-button'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Are you an Employer?</Text> */}
        <Button
          containerStyle = {{backgroundColor: '#003399',
          height: 90,
          width: 200,
          color: 'white',
          padding: 20,
          margin: 20,
          textAlign: 'center',
          overflow:'hidden', borderRadius:12}}
          style = {styles.text}
          onPress={() => this.props.navigation.navigate('EmployerHome')}
        >I'm looking for domestic services</Button>
        <Button
        containerStyle = {{backgroundColor: '#003399',
        height: 90,
        width: 200,
        color: 'white',
        padding: 20,
        margin: 20,
        textAlign: 'center',
        overflow:'hidden', borderRadius:12}}
        style={styles.text}
          onPress={() => this.props.navigation.navigate('EmployeeHome')}>I'm offering domestic services</Button>
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

