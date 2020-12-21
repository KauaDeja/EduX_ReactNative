import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      marginTop:60
    },
    listTurma:{
      margin: 10,
      padding: 10,
      backgroundColor: '#00B751',
      width: "auto",
      flex: 1,
      alignSelf: "center",
      flexDirection: "row",
      borderRadius: 12
    }
  });

const Turmas = (turma) => {
    const {descricao, idCurso} = turma;

    return (
        <View style={styles.listTurma}>
            <View style={{alignItems:"center",flex:1}}>
                <Text style={{fontWeight:"bold"}}>{descricao}</Text>
                <Text style={{fontWeight:"bold"}}>{idCurso}</Text>
            </View>

        </View>
    )
}

export default Turmas;
