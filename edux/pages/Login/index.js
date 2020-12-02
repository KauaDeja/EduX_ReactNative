import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

// Async Storage = semelhante ao localStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ( {navigation} ) => {

    // state => {get; set;}
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const salvar = async (value) => {
        try {
          await AsyncStorage.setItem('@jwt', value)
        } catch (e) {
          // saving error
        }
    }
    // Método Logar
    const Logar = () => {
        
        const corpo = {
            email : email,
            senha : senha
        }
        // Ao invés de passarmos a o localhost, agora é o IP
        fetch('http://192.168.0.18:5000/api/login', {
            method: 'POST',
            headers :{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(corpo)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.status != 404){
                alert('Seja bem vindo');
                console.log(data.token);
                
                salvar(data.token);
                navigation.push('Autenticado');
            }else{
                alert('Email ou senha inválidos! :( ');
            }
        })
        .catch(error =>console.log(error));

    }

    return (
        // HTML
        <View style={styles.container}>
           <Text style={styles.textTitulo}>EduX</Text>
           <Text style={styles.textSubTitulo}>LOGIN</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Email"
            />

            <TextInput
                style={styles.input}
                onChangeText={text => setSenha(text)}
                value={senha}
                placeholder="Senha"
                secureTextEntry={true}// Deixa a senha invísivel
            />
            <TouchableOpacity
                style={styles.button}
                onPress={Logar}//adiciono um evento ao Botao 
            >
                <Text style={styles.textButton}>ENTRAR</Text>
            </TouchableOpacity>
        </View>


    )
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#800080',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '70%',
        height: 35,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        marginTop: 30,
        backgroundColor: '#ffffff',
    },
    button: {
        backgroundColor: 'white',
        width: '70%',
        height: 35,
        padding: 10,
        borderRadius: 6,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center', 

    },
    textButton: {
        color: 'purple',
        fontWeight: 'bold',

    },
    textTitulo: {
      fontSize: 70,
      color: 'white',
      fontWeight: 'bold',
     
    },
    textSubTitulo:{
        color: 'white',
     

    }
});


export default Login;