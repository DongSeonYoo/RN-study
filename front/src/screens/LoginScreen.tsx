import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

function LoginScreen({navigation}: any) {
  return (
    <View>
      <Text>로그인 화면</Text>
      <Button
        title="메인페이지로 이동"
        onPress={() => navigation.navigate('AuthHome')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default LoginScreen;
