import React from 'react';
import MenuEdux from '../../components/menu';
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import background from '../../assets/img/educacao1.jpg'

const image = {background};

const Objetivo = () =>{
    return(
     <MenuEdux/>   
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    </ImageBackground>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    }
  })

export default Objetivo


