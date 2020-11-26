import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider, Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import logo from '../../assets/img/logobranco.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'




export const MenuEdux = () => {
   
    return (
      <Appbar style={styles.top}>


     <Appbar.Action
        size={75}
        style={{marginBottom:-10}}
        icon={logo}
        onPress={() => console.log('Retorna ao inicio')}>
      </Appbar.Action>

      <Appbar.Action 
      style={{marginLeft:190,marginBottom:-10}}
      onPress={() => console.log('Fazer checkout')}>
        <View>
        <FontAwesomeIcon icon={faSignOutAlt} color={'red'}></FontAwesomeIcon>   
        </View>
      </Appbar.Action>
       
    </Appbar>
     
    );
  };
 
  const styles = StyleSheet.create({
    top: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      backgroundColor:'#9200D6'
    },
  });
 
  export default MenuEdux