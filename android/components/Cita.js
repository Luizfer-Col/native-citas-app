import React from 'react';
import {StyleSheet, Text, View, Button, TouchableHighlight} from 'react-native';

export default function Cita({item, eliminarPaciente}) {
  const dialogoEliminar = id => {
    // console.log(`eliminando el id ${id}`);
    eliminarPaciente(id)
    // return;
  };

  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Paciente: </Text>
        <Text style={styles.texto}>{item.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario: </Text>
        <Text style={styles.texto}>{item.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas: </Text>
        <Text style={styles.texto}>{item.sintomas}</Text>
      </View>
      <TouchableHighlight
        style={styles.btnEliminar}
        onPress={() => dialogoEliminar(item.id)}>
        <Text style={styles.textoEliminar}> Eliminar &times; </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#fff',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  texto: {
    fontSize: 18,
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  textoEliminar: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
