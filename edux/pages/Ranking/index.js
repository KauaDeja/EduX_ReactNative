
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import MenuEdux from '../../components/menu';
import { Text } from 'react-native-elements';
import ItemUsuario from '../../components/ItemUsuario';
import AppBarEdux from '../../components/appbar'


const Ranking = () => {
    // get set
    const [ranking, setRanking] = useState([]);
    const [curtida, setCurtida] = useState([]);


    // Assim que a pagina carregar ele ja renderiza o primeiro efeito
    useEffect(() => {
        ListarCurtida();
        listarRanking();
 
    }, [])

    // Método-GET
    const listarRanking = () => {
        fetch(`http://192.168.0.18:5000/api/usuario/ranking`)// ip e usuario
            .then(response => response.json())
            .then(dados => {
                // pega o eventos
                setRanking(dados.data);
                console.log(dados);
            })
            .catch(err => console.error(err));

        }

        const ListarCurtida = () =>{
            fetch(`http://192.168.0.18:5000/api/curtida`)
            .then(response => response.json())
            .then(dados => {
                // pega o eventos
                setCurtida(dados.data);
                console.log(dados);
            })
            .catch(err => console.error(err));

        }
        // metodo que renderiza todas as propriedades do usuario
        const renderItem = (usuario) => {
            return (
                <ItemUsuario
                    AlunoTurma={usuario.item.AlunoTurma}
                    ObjetivoAluno={usuario.item.ObjetivoAluno}
                    dObjetivoNavigation={usuario.item.dObjetivoNavigation} />
            )
        }

return (
    <View>
        <Text style={styles.tituloRanking}>RANKING GERAL</Text>

        <View style={{ alignSelf: 'center', flexDirection: "row", justifyContent: 'center', backgroundColor: '#9200D3', borderRadius: 30, marginTop: 15 }}>
            <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                <Image source="https://avatarfiles.alphacoders.com/125/125919.jpg" style={{ width: 60, height: 60, borderRadius: 30 }} />
                <View style={{ alignSelf: 'center', padding: 9 }}>
                    <Text h5 style={styles.texto1}>Kaua Deja da Silva</Text>
                    <Text h7 style={styles.texto1}>2° Desenvolvimento de Sistemas</Text>
                </View>
            </View>
        </View>

        <View style={{ marginTop: 50, }}>
            <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                <View style={[styles.ranking, { backgroundColor: '#00D65F' }]}>
                    <Text style={styles.number}>3333</Text>
                    <Text style={{ color: 'white' }}>33333</Text>
                    <Text style={styles.bottomText}>33333</Text>
                </View>
            </View>

            <View style={{ alignSelf: 'center', flexDirection: 'row', }}>
                <View style={[styles.ranking, { marginRight: 70, backgroundColor: '#00C2EE' }]}>
                    <Text style={styles.number}>22222</Text>
                    <Text style={{ color: 'white' }}>22222</Text>
                    <Text style={styles.bottomText}>2222</Text>
                </View>

                <View style={[styles.ranking, { backgroundColor: '#9200D6' }]}>
                    <Text style={styles.number}>2222</Text>
                    <Text style={{ color: 'white' }}>2222</Text>
                    <Text style={styles.bottomText}>11111</Text>
                </View>
            </View>

            <View style={{ alignSelf: 'center' }}>
                <View style={[styles.ranking, { backgroundColor: '#FF271C' }]}>
                    <Text style={styles.number}>1111</Text>
                    <Text style={{ color: 'white' }}>11111</Text>
                    <Text style={styles.bottomText}>11111</Text>
                </View>
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
        marginTop: 45,
        fontSize: 23,
        color: 'purple',
        fontWeight: 'bold',
    },
    texto1: {
        color: 'white',
    },
    ranking: {
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: '#9200D6',
        borderRadius: 80,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        alignItems: 'center'

    },


});



export default Ranking;