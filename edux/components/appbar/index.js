import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View,Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChalkboardTeacher, faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';



const AppBarEdux = () => (

<Appbar  className='hoverIcons' style={styles.bottom}>

<View style={{
  flex:1,
  flexDirection:'row',
  justifyContent:'space-around', 
}}  
>

 <View style={styles.container}>
   
 <TouchableHighlight  onPress={() => console.log('Direcionar para Inicio')} underlayColor='#00B751'>
 <View >
  <FontAwesomeIcon icon={faSchool} color={'white'} size={35} style={{alignSelf:'center'}} >
 </FontAwesomeIcon>
  <Text style={styles.buttonText}>Inicio</Text>
 </View>
</TouchableHighlight>

<TouchableHighlight style={styles.allignitems} onPress={() => console.log('Direcionar para Turmas')} underlayColor='#00B751'>
 <View style={styles.allignitems}>
 <FontAwesomeIcon icon={faChalkboardTeacher} color={'white'} size={35} style={{alignSelf:'center'}}  >
 </FontAwesomeIcon>
 <Text style={styles.buttonText}>Turmas</Text>
 </View>
</TouchableHighlight>

<TouchableHighlight style={styles.allignitems} onPress={() => console.log('Direcionar para Objetivos')} underlayColor='#00B751'> 
 <View style={styles.allignitems}>
 <FontAwesomeIcon icon={faGraduationCap} color={'white'} size={35} style={{alignSelf:'center'}} >
 </FontAwesomeIcon>
 <Text style={styles.buttonText}>Objetivos</Text>
 </View>
</TouchableHighlight>
 
 </View > 


</View>


</Appbar>

 );


export default AppBarEdux

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    flex:1,
    top:615,
    backgroundColor:'#00D65F'
  },
  buttonText: {
    fontSize:15,
    color: 'white',
    fontWeight:'bold',
    textAlign:'center'
  },

  container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around'
  }
});