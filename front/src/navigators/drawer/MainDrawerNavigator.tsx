import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapHomeScreen from '../../screens/MapHomeScreen';

const Drawer = createDrawerNavigator();

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});

export default MainDrawerNavigator;
