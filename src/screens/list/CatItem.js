import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Moment from 'moment';

export default class CatItem extends Component {

  render() {
    Moment.locale('en');
    let pic = {
      uri: 'https://cataas.com/cat'
    };
    return (
      <View style={styles.listBackground}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('CatDetailsScreen', {
          description: this.props.data.text,
          date: this.props.data.updatedAt,
        })} underlayColor="white">
          <View elevation={5} style={styles.container}>
            <Image source={pic} style={styles.imageStyle} />
            <View style={{ flex: 1, flexDirection: 'column', margin: 8 }}>
              <Text numberOfLines={3} ellipsizeMode={'tail'} style={styles.listDescriptionStyle}>
                {`${this.props.position} ${this.props.data.text}`}
              </Text>
              <Text style={styles.listDateStyle}>
                {Moment(this.props.data.updatedAt).format("DD/MM/YYYY")} at {Moment(this.props.data.updatedAt).format("HH:SS")}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 89,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },
  imageStyle: {
    width: 117,
    height: 74,
    marginTop: 8,
    marginStart: 8
  },
  listDescriptionStyle: {
    color: '#333333',
    fontSize: 14,
  },
  listDateStyle: {
    color: '#333333',
    fontSize: 14,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0
  },
  listBackground: {
    flex: 1,
    margin: 8,
    backgroundColor: '#E5E5E5',
  }
});