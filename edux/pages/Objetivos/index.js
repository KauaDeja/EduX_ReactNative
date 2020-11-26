import React from 'react';
import MenuEdux from '../../components/menu';
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import background from '../../assets/img/educacao1.jpg'
import { Height, Opacity } from '@material-ui/icons';
import AppBarEdux from '../../components/appbar'






const Objetivo = () =>{
    return(
     <View>
       <MenuEdux></MenuEdux>
        <Text>Objetivos</Text>
        
        <AppBarEdux></AppBarEdux>
     </View>
     )
}





export default Objetivo



