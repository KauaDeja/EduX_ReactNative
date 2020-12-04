import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      marginTop:60
    },
    listTurma:{
      margin:10,
      padding:10,
      backgroundColor:"#FFF",
      width:"80%",
      flex:1,
      alignSelf:"center",
      flexDirection:"row",
      borderRadius:5
    }
  });

const Turmas = (turma) => {
    const {Descricao, IdCurso} = turma;

    return (
        <View style={styles.listTurma}>
            <View style={{alignItems:"center",flex:1}}>
                <Text style={{fontWeight:"bold"}}>{Descricao}</Text>
                <Text style={{fontWeight:"bold"}}>{IdCurso}</Text>
            </View>

        </View>
    )
}

export default Turmas;
