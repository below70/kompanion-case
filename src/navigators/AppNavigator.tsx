import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Feed, Login} from '../screens';

const Stack = createNativeStackNavigator();

export default function AppNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
}
