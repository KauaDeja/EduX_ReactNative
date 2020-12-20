import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Turmas from '../../components/Turmas';

const Turma = () => {

  useEffect(() => {
    Get();
  }, []);

  const [Descricao, setDescricao] = useState('');
  const [IdCurso, setCurso] = useState([]);

  const Get = () => {
    fetch('https://localhost:5001/api/Turma')
      .then(response => response.json())
      .then(data => {
        setDescricao(data.data)
        setCurso(data.data)
        console.log(data.data);
      })
      .catch(err => console.error(err))
  }

  const turma = ({ item }) => (
    <Turmas descricao={item.descricao} idcurso={item.idcurso} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.Descricao}>Turmas : </Text>
      <View style={styles.flat}>
        <FlatList
          data={Descricao}
          renderItem={turma}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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