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
            <Image
                style={styles.logo}
                source={{
                    uri: 'https://lh3.googleusercontent.com/fife/ABSRlIrsFPvw8BQHWD9cIDs20ikOeVhFC30xDnKjrAJca7Ap5T82ycDS8Y0d1KZ9CDwlIFv2PO2AFELtq2BXEc1d4aFLdrAX8C4dgeO_mRXmXTSaqtn8FmSzr9iy_KPcJWFIwAvXsW_nfbeFXYrpCWb2C8j_mQ510wjYXTVo9Zt5hoDJkhMqb1b5311JGu1k3lLG0l-0GFVkZjwfVJ1U4Ffg5dZqQJF22KLgwF5iaRugwvw5TnLb6mwLkugfBSZ74CETGEVJDDi0HHzUfnDSiST3_fJo_T5ElRIccc8NTeiF-8AnIisTkIR97sk_KoiwrDqEOZCEexpYVMBuIMCvHTrHIsLjK3MsCeBJYKR-xSj1tFSOJCsjQV2l2n-jcf0UfS3p1V6eMVads9iLQCY6vvTZK0i5H9rtTmjy1gXFkgx21sqwPdYH26QBp6vkUgDmHem7vfFZkoYzi52zyRidQ4MPbbvDc-fVl2amZDHUBmOTsS9qi8kiQJk6jSIDiRuQu3HfS2maloq9YK9d_7XcvbiP16QqYicgUKC2_VWyEVRB1WBlCJVa3bKF7in-HLxj3nL1qmfWDIh93X2O6OCSLmnD2e9CtKbhRb_F4Fl5HIorNaA0hmonXZHWRnxfulVc9fvt4Qbvq2GVuh77wYVc7QKbEOPlXh18HnoyuAP86y1pM0v6qKl3P7l1Q42OoFvjyNmNVrRZpnObef3lv4FVf2V5H2ewU8ymI_aQ=w1349-h635-ft?authuser=0',
                }}
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="  Email"
            />

            <TextInput
                style={styles.input}
                onChangeText={text => setSenha(text)}
                value={senha}
                placeholder="  Senha"
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
        fontWeight: 'bold',

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
        fontWeight: 'bold',

    },
    textButton: {
        color: 'purple',
        fontWeight: 'bold',

    },
    logo: {
        width: 200,
        height: 100,
        marginBottom: 60,
    }
});


export default Login;