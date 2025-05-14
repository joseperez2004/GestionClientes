import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';

export default function ListarClientes({ navigation, clientes }) {
  return (
    <ScrollView style={styles.contenedor}>
      {/* Encabezado con título y botón de agregar */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <MaterialIcons name="list-alt" size={28} color="#2E8B57" />
          <Text style={styles.titulo}>Lista de Clientes</Text>
        </View>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Home')} 
          style={styles.addButton}
        >
          <FontAwesome name="plus-circle" size={28} color="#2E8B57" />
        </TouchableOpacity>
      </View>

      {/* Lista de clientes */}
      {clientes.length > 0 ? (
        clientes.map((item, index) => (
          <View key={index.toString()} style={styles.clienteContainer}>
            {/* Cédula */}
            <View style={styles.campoContainer}>
              <MaterialIcons name="credit-card" size={20} color="#555" style={styles.icon} />
              <Text style={styles.label}>Cédula:</Text>
              <Text style={styles.dato}>{item.cedula || 'No especificado'}</Text>
            </View>
            
            {/* Nombres */}
            <View style={styles.campoContainer}>
              <Octicons name="person" size={18} color="#555" style={styles.icon} />
              <Text style={styles.label}>Nombres:</Text>
              <Text style={styles.dato}>{item.nombres || 'No especificado'}</Text>
            </View>
            
            {/* Apellidos */}
            <View style={styles.campoContainer}>
              <Octicons name="people" size={18} color="#555" style={styles.icon} />
              <Text style={styles.label}>Apellidos:</Text>
              <Text style={styles.dato}>{item.apellidos || 'No especificado'}</Text>
            </View>
            
            {/* Fecha Nacimiento */}
            <View style={styles.campoContainer}>
              <MaterialIcons name="cake" size={20} color="#555" style={styles.icon} />
              <Text style={styles.label}>Fecha Nacimiento:</Text>
              <Text style={styles.dato}>{item.fechaNacimiento || 'No especificado'}</Text>
            </View>
            
            {/* Sexo */}
            <View style={styles.campoContainer}>
              <MaterialIcons name="wc" size={20} color="#555" style={styles.icon} />
              <Text style={styles.label}>Sexo:</Text>
              <Text style={styles.dato}>{item.sexo || 'No especificado'}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.emptyMessage}>Añadir Registro</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: '#98FB98',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginLeft: 10,
  },
  addButton: {
    padding: 5,
  },
  clienteContainer: {
    backgroundColor: '#F0FFF0',
    borderRadius: 10,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  campoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
    marginLeft: 8,
    width: 140,
  },
  dato: {
    color: '#2E8B57',
    flex: 1,
  },
  icon: {
    width: 24,
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: '#555',
    fontStyle: 'italic',
  },
});