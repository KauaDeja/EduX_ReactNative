import React, { useEffect, useState }  from 'react';
import MenuEdux from '../../components/menu';
import { Text, View,FlatList } from "react-native";
import AppBarEdux from '../../components/appbar'
import {useFonts,
  TitilliumWeb_400Regular,
  TitilliumWeb_700Bold,
} from '@expo-google-fonts/dev'

const Objetivo = () =>{
  const [Objetivo, setObjetivo] = useState([]);
  useEffect(() => {
    listarObjetivos();
},[])

const listarObjetivos = () => {
  fetch('http://192.168.7.129:5000/api/objetivo')
  .then(response => response.json())
  .then(dados => {
      setObjetivo(dados);
  })
  .catch(err => console.error(err));
}

const renderItem = (Objetivo) => {
  <itemObjetivo nome={Objetivo.item.descricao} />
}
  
    useFonts({TitilliumWeb_400Regular,TitilliumWeb_700Bold});
    return(
     <View>
       <MenuEdux></MenuEdux>
       <View>
        <Text style={{textAlign:'center',
         textTransform:'uppercase', fontSize:40,fontFamily:TitilliumWeb_400Regular , color:'#9200D6', marginTop:120 }}>
           Objetivos
        </Text>

        <FlatList
           keyExtractor={item=> item.idObjetivo}
           renderItem={renderItem}
       />
       </View>
        <AppBarEdux></AppBarEdux>
     </View>
     )
}





export default Objetivo



