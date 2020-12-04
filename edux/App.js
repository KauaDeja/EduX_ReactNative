import React from 'react';

//Pages
//import Home from './pages/Home'
//import Turmas from './pages/Turma'
import Objetivos from './pages/Objetivos'
import Login from './pages/Login'
//import Postagem from './pages/Postagem'
import Ranking from './pages/Ranking'


//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack  = createStackNavigator();

const Hidden = () => {
  return null;
}



const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Ranking"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = 'school';
          } else if (route.name === 'Objetivos') {
            iconName = 'graduation-cap';
          }
          else if (route.name === 'Turmas') {
            iconName = 'chalkboard-teacher';
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: '#00B751',
        inactiveBackgroundColor: '#00D65F',
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
        labelStyle: {
          fontSize: 11,
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
        },
      }
      }>
      <Tab.Screen name="Início" component={Ranking} />

      {/* <Tab.Screen name="Turmas" component={Login} /> */}

      <Tab.Screen name="Objetivos" component={Objetivos} />

    </Tab.Navigator>

  )
}

const Autenticado = () => {
  return(
      <Drawer.Navigator >
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ drawerLabel: "Home" }} />
      {/* <Drawer.Screen name="Timeline" component={Postagem} options={{ drawerLabel: "Timeline" }} /> */}
      <Drawer.Screen name="Alunos" component={Objetivos} options={{ drawerLabel: "Alunos" }} />
      </Drawer.Navigator>
  )
}

//App
export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, drawerLabel: Hidden }} />
        <Stack.Screen name="EduX" component={Autenticado} options={{ headerShown: false, drawerLabel: Hidden }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
