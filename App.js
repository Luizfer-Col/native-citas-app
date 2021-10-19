import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import Cita from './android/components/Cita';
import Formulario from './android/components/Formulario';

const App = () => {
  const [mostrarForm, guardarMostrarForm] = useState(false);

  //definimos estado de citas
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Juan', sintomas: 'No Come'},
    {id: '2', paciente: 'Redux', propietario: 'Itzel', sintomas: 'No Duerme'},
    {id: '3', paciente: 'Native', propietario: 'Josue', sintomas: 'No Canta'},
  ]);

  //Eliminar pacientes del state
  const eliminarPaciente = id => {
    setCitas(citasActuales => {
      return citasActuales.filter(cita => cita.id !== id);
    });
  };

  //Muestra u oculta el formulario

  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarForm);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <View>
        <TouchableHighlight
          style={styles.btnMostrarForm}
          onPress={() => mostrarFormulario()}>
          <Text style={styles.textoMostrarForm}>Crear Nueva Cita</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.contenido}>
        {mostrarForm ? (
          <>
            <Text style={styles.titulo}>
              Crear Nueva Cita
            </Text>

            <Formulario />
          </>
        ) : (
          <>
            <Text style={styles.titulo}>
              {citas.length > 0 ? 'Administra tus Citas' : 'Agrega Citas'}
            </Text>

            <FlatList
              style={styles.listado}
              data={citas}
              renderItem={({item}) => (
                <Cita item={item} eliminarPaciente={eliminarPaciente} />
              )}
              keyExtractor={cita => cita.id}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  titulo: {
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: '#AA076B',
    marginVertical: 10,
  },
  textoMostrarForm: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
