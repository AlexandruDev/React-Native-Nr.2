import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import Navbar from './../../components/Navbar';
import CatItem from './CatItem'
import Footer from './Footer';

export default class CatsListScreen extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    data: [],
    loading: false,
  };

  amount = 20;

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true });
    const response = await fetch(`https://cat-fact.herokuapp.com/facts/random?animal=cat&amount=${this.amount}`);
    const json = await response.json();
    this.setState(state => ({ data: [...state.data, ...json], loading: false }));
  };

  loadMore = () => {
    this.fetchData()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Navbar />
        </View>
        <FlatList
          data={this.state.data}
          keyExtractor={(i) => i.toString}
          onEndReached={() => this.loadMore()}
          //onEndReachedThreshold={0.1}
          ListFooterComponent={() => this.state.loading ? null : <Footer />}
          renderItem={({ item, index }) =>
            <CatItem data={item} navigation={this.props.navigation} position={index} />
          }
        />
      </View>
    );
  }
}