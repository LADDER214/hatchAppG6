import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Button from 'react-native-button'

export default class Chat extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This will be the Chat screen, where employers end employees can view message history and discuss exact
            details of employment before offering or receiving employment
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
    }
  });
  


