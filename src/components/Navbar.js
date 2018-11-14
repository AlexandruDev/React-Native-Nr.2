import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class Navbar extends Component {

  render() {
    return (
      <View style={styles.toolbar}>
        <Text style={styles.toolbarTextStyle}>Cat app</Text>
      </View>)
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#212121',
    height: 56,
  },
  toolbarTextStyle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginStart: 72,
    textAlignVertical: 'center'
  },
});
