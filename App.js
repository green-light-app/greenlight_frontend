import * as React from 'react';
import { Provider } from 'react-redux'; 
import { createStore } from 'redux'; 
import userReducer from './UserReducer'; 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const store = createStore(userReducer)
const Stack = createStackNavigator(); 

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home screen test </Text>
    </View>
  )
}

export default class App extends React.Component {
  render(){
    return (
        <NavigationContainer>
          <Provider store={store}>
              <Stack.Navigator>
                <Stack.Screen
                    name = "Home"
                    component = {HomeScreen}
                    options = {{title: 'Welcome'}}
                />
              </Stack.Navigator>
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

