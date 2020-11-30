import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
import Inicio from './pages/Inicio';

const Autenticado = () => {
  return (
    <Tab.Navigator initialRouteName="Inicio">
      <Tab.Screen name="Inicio" component={Inicio} />
    </Tab.Navigator>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      {// Ao deixar o headershow como falso, ele para de exibir o menu do topo
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Autenticado" component={Autenticado} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
