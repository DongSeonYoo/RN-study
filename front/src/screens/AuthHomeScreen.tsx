import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {AuthStackParamList} from './LoginScreen';
import {authNavigation} from '../constants';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigation.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <View>
      <Button
        title="로그인 화면으로 이동"
        onPress={() => navigation.navigate(authNavigation.LOGIN)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
