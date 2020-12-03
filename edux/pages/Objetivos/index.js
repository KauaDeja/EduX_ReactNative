import React, { useEffect, useState }  from 'react';
import MenuEdux from '../../components/menu';
import { Text, View,StyleSheet } from "react-native";
import { FlatList } from 'react-native-gesture-handler'
import AppBarEdux from '../../components/appbar'

import {useFonts,
  TitilliumWeb_400Regular,
  TitilliumWeb_700Bold,
} from '@expo-google-fonts/dev'

const Objetivo = () =>{

  useEffect(() => {
    listarObjetivos();
},[])


  const ItemObjetivo = ({descricao}) => {
    return (
        <View style={styles.listItem}>
            <View style={{alignItems:"center"}}>
                <Text style={{fontWeight:"bold"}}>{descricao}</Text>
            </View>
        </View>
    )
}

  const [objetivos, setObjetivos] = useState([]);
  

const listarObjetivos = () => {
  fetch('http://192.168.7.129:5000/api/objetivo')
  .then(response => response.json())
  .then(dados => {
      setObjetivos(dados);
  })
  .catch(err => console.error(err));
}

const renderItem = ({item}) => {
  console.log(item);
  return(
      <ItemObjetivo
          descricao = {item.descricao}
      />
  )
}
  
    useFonts({TitilliumWeb_400Regular,TitilliumWeb_700Bold});
    return(
     <View>
       <MenuEdux></MenuEdux>
       
       <View>
        <Text style={styles.title}>
           Objetivos
        </Text>

        <FlatList style={styles.flatObjetivo}
        data={objetivos} 
        renderItem={renderItem} 
        />

       </View>

        <AppBarEdux></AppBarEdux>
     </View>
     )
}

const styles = StyleSheet.create({

  title:{
    textAlign:'center',
    textTransform:'uppercase', 
    fontSize:40,fontFamily:TitilliumWeb_400Regular , 
    color:'#9200D6', 
    marginTop:120 
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:'#00B751',
    width:"auto",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:12
  },
  flatObjetivo:{
    marginTop:20,
    height:480
  }

});






export default Objetivo



