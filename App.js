import React from 'react';
import { View, StyleSheet } from 'react-native';
import Dashboard from './Dashboard/Dashboard';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Dashboard />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#FE5000',
  },
});

export default App;
