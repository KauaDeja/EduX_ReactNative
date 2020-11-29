import React from 'react';
import MenuEdux from '../../components/menu';
import { Text, View } from "react-native";
import AppBarEdux from '../../components/appbar'
import {useFonts,
  TitilliumWeb_400Regular,
  TitilliumWeb_700Bold,
} from '@expo-google-fonts/dev'

const Objetivo = () =>{
    useFonts({TitilliumWeb_400Regular,TitilliumWeb_700Bold});
    return(
     <View>
       <MenuEdux></MenuEdux>
       <View>
        <Text style={{textAlign:'center',
         textTransform:'uppercase', fontSize:40,fontFamily:TitilliumWeb_400Regular , color:'#9200D6', marginTop:120 }}>
           Objetivos
        </Text>
       </View>
        <AppBarEdux></AppBarEdux>
     </View>
     )
}





export default Objetivo



