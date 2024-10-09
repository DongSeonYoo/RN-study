import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import AuthHomeScreen from '../../screens/AuthHomeScreen';
import LoginScreen, {AuthStackParamList} from '../../screens/LoginScreen';
import {authNavigation} from '../../constants';

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={authNavigation.AUTH_HOME}
        component={AuthHomeScreen}
      />
      <Stack.Screen name={authNavigation.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default AuthStackNavigator;
