import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Moment from 'moment';

export default class CatDetailsScreen extends Component {

  static navigationOptions = {
    title: 'Cat app',
    headerStyle: { backgroundColor: '#212121' },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white'
  }

  render() {
    Moment.locale('en');
    let pic = {
      uri: 'https://cataas.com/cat'
    };
    const { navigation } = this.props;
    const date = navigation.getParam('date', 'DEFAULT DATE');
    const description = navigation.getParam('description', 'DEFAULT DESCRIPTION');
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1, flexDirection: "column", alignItems: 'center' }}>
          <Image source={pic} style={styles.imageStyle} />
          <Text style={styles.listDateStyle}>{Moment(date).format("DD/MM/YYYY")} at {Moment(date).format("HH:SS")}</Text>
          <Text style={styles.listDescriptionStyle}>{description}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listDescriptionStyle: {
    color: '#333333',
    fontSize: 14,
    marginStart: 13,
    marginEnd: 13,
  },
  listDateStyle: {
    color: '#333333',
    fontSize: 14,
    marginTop: 8,
    fontWeight: 'bold',
    bottom: 0,
  },
  imageStyle: {
    width: 278,
    height: 140,
    marginTop: 23,
  },
});