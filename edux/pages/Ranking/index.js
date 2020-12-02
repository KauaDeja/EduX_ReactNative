import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-elements';



const Ranking = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.tituloRanking}>RANKING GERAL</Text>
            <View style={styles.divPai}>
                    <Image style={styles.avatar}
                        source={{
                            uri:
                                'https://i.redd.it/al020w7l9g841.jpg',
                        }}
                    >
                    </Image>
                <View  style={styles.divTexto}>
                    <Text h5 style={styles.texto1}>Kaua Deja da Silva</Text>
                    <Text h7 style={styles.texto1}>2° Desenvolvimento de Sistemas</Text>
                </View>
            </View>


        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tituloRanking: {
        flex: 1,
        textAlign: 'center',
        marginTop: 60,
        fontSize: 23,
        color: 'purple',
        fontWeight: 'bold',
    },
    avatar: {
        flex: 1,
        width: 70,
        height: 67,
        borderRadius: 35,
        marginTop: -150,
        marginBottom: 250,
        borderColor: 'purple',
        borderWidth: 2,
        marginLeft: 20,

    },
    divPai: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        flex: 1,
        flexDirection: 'row',
    },
    divTexto: {
        marginTop: -135,
        marginLeft: 50,
        marginRight: 30,
    },

});




export default Ranking;