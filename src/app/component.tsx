import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LogInForm from '../components/login-form';

const Application = () => {
  return (
    <View style={styles.container}>
      <LogInForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default Application;
