import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './redux/store'
import {Provider} from 'react-redux';
import GameOfLife from './containers/game-of-life'

export default class App extends React.Component {
  componentWillMount(){

  }

  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
      <GameOfLife />
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
