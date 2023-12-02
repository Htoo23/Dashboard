import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icons from the library
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab=createBottomTabNavigator();

const Dashboard = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.dashboardText}>Dashboard</Text>
      <View style={styles.inputContainer}>
        <Icon name="search" size={20} color="#333" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Search by merchant's name or shop name"
          placeholderTextColor="#888"
        />
        <Icon name="cog" size={20} color="#333" style={styles.icon} />
      </View>
      <View style={styles.newContainer}>
        
        
       

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FE5000',
    padding: 20,
  },
  dashboardText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    top:10,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    color: '#333',
  },
  icon: {
    marginHorizontal: 5,
  },
  newContainer: {
    width: 390, // Customize the width as needed
    height: 740, // Customize the height as needed
    backgroundColor: 'white',
    marginTop: 10,
    left:-18,
    padding: 20,
    borderRadius: 10,
  },
  
});

export default Dashboard;
