import React, { Component } from 'react';
import { Provider } from 'react-redux'; 
import { createStore } from 'redux'; 
import userReducer from './UserReducer'; 
import Navigator from './Navigator';

import {
  Platform, 
  StyleSheet,
  View,
  Text,
} from 'react-native';

const store = createStore(userReducer)

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigator/>
        </View>
      </Provider>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F5FCFF',
  }, 
  instructions: {
    textAlign: 'center', 
    color: '#333333', 
    marginBottom: 5,
  },
});

