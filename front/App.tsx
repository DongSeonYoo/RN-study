import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RootNavigator from './src/navigators/root/RootNavigator';
import AuthStackNavigator from './src/navigators/stack/AuthStackNavigator';

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
