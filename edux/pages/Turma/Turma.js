import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


import Turmas from './components/Turmas'

const Turma = () => {

    const [Descricao, setDescricao] = useState('');
    const [IdCurso, setCurso] = useState([]);

    useEffect(() => {
      Get();
  }, []); 

    const Get = () => {
      fetch('http://192.168.0.21:5000/api/Turma')
          .then(response => response.json())
          .then(data => {
              setDescricao(data.data)
              setCurso(data.data)
              console.log(data.data);
          })
          .catch(err => console.error(err))
  }


  const turmas = ({ item }) => (
    <Turmas Descricao={item.Descricao} IdCurso={item.IdCurso} />
  );

    return(
        <View style={styles.container}>
          <Text style ={styles.Descricao}>Turmas : </Text>
          <View style={styles.flat}>
          <FlatList
                data={Descricao}
                renderItem={turmas}
                keyExtractor={item => item.id}
            />

            <FlatList
                data={IdCurso}
                renderItem={Turma}
                keyExtractor={item => item.id}
            />
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
    flex: 1,
    alignItems: 'center'
   },

   Descricao: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    padding: 15,
    color: 'purple',
  },

   flat: {
    width: 400,
    borderColor: 'purple',
    
  }
});

export default Turma;