import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

const Stack = createStackNavigator(); 

function MyStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = "Home"
                component = {Home}
                options = {{title: 'Welcome'}}
            />
            <Stack.Screen name = "Chat" component = { Chat } />
        </Stack.Navigator>
    )
}