import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Objetivo from './pages/Objetivos'


// Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Chamo essas navegações
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// Páginas
import Login from './pages/Login';
import Ranking from './pages/Ranking';


const Autenticado = () => {
  return (
    <Tab.Navigator initialRouteName="Ranking" >
      <Tab.Screen name="Ranking"  component={Ranking} />
    </Tab.Navigator>

  );
}

export default function App() {
  return (
  <Objetivo />    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
