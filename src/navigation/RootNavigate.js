// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screen'


const Stack = createNativeStackNavigator();

function RootNavigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} headerBackVisible/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigate;