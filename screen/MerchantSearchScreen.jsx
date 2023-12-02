// DashboardScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MerchantSearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard Screen</Text>
      {/* Add your content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MerchantSearchScreen;
