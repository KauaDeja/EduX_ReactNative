import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import MenuEdux from '../menuitems'
import logo from '../../assets/img/logobranco.png'

const MenuAppBar = () => (
 <Appbar style={styles.bottom}>
   <Appbar.Action
     icon={logo}
     onPress={() => console.log('Direcionar para inicio')}
    />
    <Appbar.Action icon="menu" onPress={( <MenuEdux/>)} />
  </Appbar>
 );

export default MenuAppBar

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    top:0
  },
});