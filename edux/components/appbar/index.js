import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View,Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChalkboardTeacher, faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';




const AppBarEdux = () => (

<Appbar  className='hoverIcons' style={styles.bottom}>

<View style={{
  flex:1,
  flexDirection:'row',
  justifyContent:'space-around', 
}}>
 <View style={styles.container}>
   
 <TouchableOpacity  onPress={() => console.log('Direcionar para Inicio')} >
  <FontAwesomeIcon icon={faSchool} color={'white'} size={35} style={{alignSelf:'center'}} >
 </FontAwesomeIcon>
  <Text style={styles.buttonText}>Inicio</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.allignitems}  color='#00B751' >
 <FontAwesomeIcon icon={faChalkboardTeacher} color={'white'} size={35} style={{alignSelf:'center'}}  >
 </FontAwesomeIcon>
    <Text style={styles.buttonText}>Turmas</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.allignitems} onPress={() => console.log('Direcionar para Objetivos')} color='#00B751'> 
 <FontAwesomeIcon icon={faGraduationCap} color={'white'} size={35} style={{alignSelf:'center'}} >
 </FontAwesomeIcon>
 <Text style={styles.buttonText}>Objetivos</Text>
</TouchableOpacity>
 
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
    bottom:0,
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