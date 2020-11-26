import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider, Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import logo from '../../assets/img/logobranco.png'

export const MenuEdux = () => {
    const [visible, setVisible] = React.useState(false);
  
    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);

    return (
      <Appbar style={styles.bottom}>
         
      <Appbar.Action icon="menu" onPress={openMenu}   
       onDismiss={closeMenu} style={{margintop:10}}>
       <Menu.Item onPress={() => {}} title="Teste" />
       <Menu.Item onPress={() => {}} title="Teste" />
       <Divider />
       <Menu.Item onPress={() => {}} title="Teste" />
      </Appbar.Action>
      
      
      
      <Appbar.Action
        size={50}
        style={{marginLeft:240, margintop:20}}
        icon={logo}
        onPress={() => console.log('Retorna ao inicio')}>
      </Appbar.Action>

     
    
    </Appbar>
     
    );
  };
 
  const styles = StyleSheet.create({
    bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      backgroundColor:'#083E76'
    },
  });
 
  export default MenuEdux