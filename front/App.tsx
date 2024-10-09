import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import RootNavigator from './src/navigators/root/RootNavigator';
import {StyleSheet} from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
