import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      marginTop:60
    },
    listAlunoTurma:{
      margin:10,
      padding:10,
      backgroundColor:"#00B751",
      width:"80%",
      flex:1,
      alignSelf:"center",
      borderRadius:12
    }
  });

const AlunoTurmas = (Aluno) => {
    const {matricula, IdUsuario, IdTurma} = Aluno;

    return (
        <View style={styles.listAlunoTurma}>
            <View style={{alignItems:"center",flex:1}}>
                <Text style={{fontWeight:"bold"}}>{matricula}</Text>
                <Text style={{fontWeight:"bold"}}>{IdUsuario}</Text>
                <Text style={{fontWeight:"bold"}}>{IdTurma}</Text>
            </View>
            
        </View>
    )
}

export default AlunoTurmas;