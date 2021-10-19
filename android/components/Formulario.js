import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function Formulario() {
  const [paciente, guardarPaciente] = useState('');
  const [propietario, guardarPropietario] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [fecha, guardarFecha] = useState('');
  const [hora, guardarHora] = useState('');
  const [sintomas, guardarSintomas] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = date => {
    const opciones = {year: 'numeric', month: 'long', day: '2-digit'};
    guardarFecha(date.toLocaleDateString('es-Es', opciones));

    // console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  //Muestra el time picker

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const confirmarHora = hora => {
    const opciones = {hour: 'numeric', minute: '2-digit'};
    guardarHora(hora.toLocaleString('en-Us', opciones));
    hideTimePicker();
  };

  //Crear nueva cita

  const crearNuevaCita = () => {
    //validaciones
    if (
      paciente.trim() === '' ||
      propietario.trim() === '' ||
      telefono.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      mostrarAlerta();
    }
  };

  //muestra alerta si la validacion falla

  const mostrarAlerta = () => {
    Alert.alert(
      'Error', // Titulo
      'Todos los campos son obligatorios', // Mensaje
      [
        {
          text: 'OK', // Arreglo de botones
        },
      ],
    );
  };

  return (
    <>
      <ScrollView style={styles.formulario}>
        <View>
          <Text style={styles.label}>Paciente</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => guardarPaciente(texto)}
          />
        </View>

        <View>
          <Text style={styles.label}>Dueño</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => guardarPropietario(texto)}
          />
        </View>

        <View>
          <Text style={styles.label}>Teléfono Contacto</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => guardarTelefono(texto)}
            keyboardType="numeric"
          />
        </View>

        <View>
          <Text style={styles.label}>Fecha: </Text>
          <Button title="Seleccionar Fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={confirmarFecha}
            onCancel={hideDatePicker}
            locale="es_Es"
          />
          <Text>{fecha}</Text>
        </View>

        <View>
          <Text style={styles.label}>Hora: </Text>
          <Button title="Seleccionar Hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={confirmarHora}
            onCancel={hideTimePicker}
            locale="es_Es"
          />
          <Text>{hora}</Text>
        </View>

        <View>
          <Text style={styles.label}>Síntomas</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={texto => guardarSintomas(texto)}
          />
        </View>

        <TouchableHighlight
          style={styles.btnSubmit}
          onPress={() => crearNuevaCita()}>
          <Text style={styles.textoSubmit}>Crear Nueva Cita</Text>
        </TouchableHighlight>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  containerform: {
    height: 4700,
  },
  formulario: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '2.5%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: '#AA076B',
    marginVertical: 10,
  },
  textoSubmit: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
