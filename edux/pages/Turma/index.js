import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Turmas from '../../components/Turmas';
import MenuEdux from '../../components/menu';


const Turma = () => {

  useEffect(() => {
    Get();
  }, []);

  const [descricao, setdescricao] = useState('');
  const [IdCurso, setCurso] = useState([]);

  const Get = () => {
    fetch('http://192.168.1.27:5000/api/Turma')
      .then(response => response.json())
      .then(data => {
        setdescricao(data.data)
        setCurso(data.data)
        console.log(data.data);
      })
      .catch(err => console.error(err))
  }

  const turma = ({ item }) => (
    <Turmas descricao={item.descricao} idcurso={item.idCurso} />
  );

  return (
  
    <View style={styles.container}>
      <MenuEdux></MenuEdux>
      <Text style={styles.title}>Turmas : </Text>
      <View style={styles.flat}>
        <FlatList
          data={descricao}
          renderItem={turma}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
  },

  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 40,
    color: '#9200D6',
    marginTop: 120
  },

  flat: {
    marginTop:50,
    width: 350,
    borderColor: 'purple',
  }
});

export default Turma;