import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

// Objeto ItemAlunoTurma
const ItemUsuario = () => {

    // Propriedades do Aluno
    const { AlunoTurma, ObjetivoAluno, dObjetivoNavigation } = user;

    return (
        // HTML do Evento
        <View style={styles.listItem}>
            <View style={{ alignItems: 'center', flex: 1 }}>
                <Text style={{ fontWeight: 'bold' }}>{AlunoTurma}</Text>
                <Text style={{ fontWeight: 'bold' }}>{ObjetivoAluno}</Text>
                <Text style={{ fontWeight: 'bold' }}>{dObjetivoNavigation}</Text>
            </View>
            <TouchableOpacity // Um Tipo de Botao
                // onPress => evento de pressionar
                // linking => Destino para outra pag
                style={{
                    height: 50,
                    width: 50,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{ color: 'red' }}>Ver</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop: 60
    },
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: '#FFF',
        width: '80%',
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 5
    }
})

export default ItemUsuario;