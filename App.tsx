import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Application from './src/app';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Application />;
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
