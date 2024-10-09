import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

function AuthHomeScreen({navigation}: any) {
  return (
    <View>
      <Button
        title="로그인 화면으로 이동"
        onPress={() => navigation.navigate('Login')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
