import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function GuardarClientes({ onGuardar }) {
  const [cedula, setCedula] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [sexo, setSexo] = useState('');

  const guardar = () => {
    if (!cedula || !nombres) {
      Alert.alert('Error', 'Cédula y Nombres son campos obligatorios');
      return;
    }

    const nuevoCliente = {
      cedula,
      nombres,
      apellidos,
      fechaNacimiento,
      sexo,
    };

    setCedula('');
    setNombres('');
    setApellidos('');
    setFechaNacimiento('');
    setSexo('');

    onGuardar(nuevoCliente);
    
    Alert.alert(
      'Datos almacenados',
      `Cédula: ${cedula}\nNombres: ${nombres}\nApellidos: ${apellidos}\nFecha Nacimiento: ${fechaNacimiento}\nSexo: ${sexo}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        
        
        <Text style={styles.label}>Cédula:</Text>
        <TextInput
          style={styles.input}
          value={cedula}
          onChangeText={setCedula}
          placeholder="Ej: 121-210604-1001F"
        />

        <Text style={styles.label}>Nombres:</Text>
        <TextInput
          style={styles.input}
          value={nombres}
          onChangeText={setNombres}
          placeholder="Ej: Jose miguel"
        />

        <Text style={styles.label}>Apellidos:</Text>
        <TextInput
          style={styles.input}
          value={apellidos}
          onChangeText={setApellidos}
          placeholder="Ej: Pérez García"
        />

        <Text style={styles.label}>Fecha de Nacimiento:</Text>
        <TextInput
          style={styles.input}
          value={fechaNacimiento}
          onChangeText={setFechaNacimiento}
          placeholder="AAAA-MM-DD"
        />

        <Text style={styles.label}>Sexo:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={sexo}
            onValueChange={(itemValue) => setSexo(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Seleccione" value="" />
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Femenino" value="Femenino" />
          </Picker>
        </View>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={guardar}
        >
          <Text style={styles.buttonText}>GUARDAR CLIENTE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#E8F5E9',
    minHeight: '100%',
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#2E7D32',
    textAlign: 'center',
    
  },
  label: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#1B5E20',
    textAlign: 'left',
  },
  input: {
    height: 45,
    borderColor: '#81C784',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#81C784',
    borderRadius: 8,
    marginBottom: 30,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  saveButton: {
    backgroundColor: '#2E7D32',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});