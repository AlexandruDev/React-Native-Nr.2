import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

export default class Footer extends Component {

    render() {
        return (
            <View>
                <ActivityIndicator size="large" animating />
            </View>);
    }
}