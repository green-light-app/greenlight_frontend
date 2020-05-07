import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from 'react-navigation';
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
      <NavigationContainer>
        <Provider store={store}>
          <View style={styles.container}>
            <Navigator/>
          </View>
        </Provider>
      </NavigationContainer>
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

