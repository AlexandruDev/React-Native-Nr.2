/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {
  createStackNavigator,
} from 'react-navigation';
import CatDetailsScreen from './src/screens/details/CatDetailsScreen';
import CatsListScreen from './src/screens/list/CatsListScreen';

const App = createStackNavigator({
  CatsListScreen: { screen: CatsListScreen },
  CatDetailsScreen: { screen: CatDetailsScreen },
});

export default App;