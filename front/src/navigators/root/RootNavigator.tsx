import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';

function RootNavigator() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}

const styles = StyleSheet.create({});

export default RootNavigator;
