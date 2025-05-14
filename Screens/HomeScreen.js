import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import GuardarClientes from './GuardarClientes';

export default function HomeScreen({  onGuardar }) {
  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <Text style={styles.titulo}>Registro de Datos del Cliente</Text>
      <GuardarClientes onGuardar={onGuardar} />

      
    </ScrollView>
  );
}

// Tus estilos permanecen igual...

const styles = StyleSheet.create({
  contenedor: {
    flexGrow: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#2E8B57',
  },



});