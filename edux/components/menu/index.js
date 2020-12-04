import * as React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { StyleSheet,Alert } from 'react-native';
import logo from '../../assets/img/logobranco.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { TouchableHighlight } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';





export const MenuEdux = ({navigation}) => {
   
  const Logout = () =>{
    Alert.alert(
      "Sair",
      "Deseja sair?",
      [
        {
          text: "Não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Sim", onPress: () => {
          AsyncStorage.removeItem('@jwt');
          navigation.push('Login');
        } }
      ],
      { cancelable: false }
    );
  }


    return (
     <Appbar style={styles.top}>
     <Appbar.Action
        size={100}
        icon={logo} 
        onPress={() => console.log('Retorna ao inicio')}>
      </Appbar.Action>

      <TouchableHighlight onPress={Logout}  >
        <FontAwesomeIcon icon={faSignOutAlt}
        color={'white'}
        style={{marginRight:30}}
        size={30}>
        </FontAwesomeIcon>
      </TouchableHighlight>

      
    </Appbar>
    );
  };
 
  const styles = StyleSheet.create({
    top: {
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height:80,
      backgroundColor:'#9200D6'
    },
  });
 
  export default MenuEdux