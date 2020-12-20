import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AlunoTurmas from '../../components/AlunoTurma';

const AlunoTurma = () => {

  useEffect(() => {
    Get();
  }, []);

  const [matricula, setMatricula] = useState('');
  const [idUsuario, setUsuario] = useState([]);
  const [idTurma, setTurma] = useState([]);

  const Get = () => {
    fetch('https://localhost:5001/ap/AlunoTurma')
      .then(response => response.json())
      .then(data => {
        setMatricula(data.data)
        setTurma(data.data)
        setUsuario(data.data)
        console.log(data.data);
      })
      .catch(err => console.error(err));
  }

  const alunoTurma = ({ item }) => (
    <AlunoTurmas matricula={item.matricula} idusuario={item.idUsuario} idturma={item.idTurma} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.Matricula}>Matricula : </Text>
      <View style={styles.flat}>
        <FlatList
          data={matricula}
          renderItem={alunoTurma}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Matricula: {
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

export default AlunoTurma;