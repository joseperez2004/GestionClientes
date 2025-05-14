import { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import ListarClientes from './Screens/ListarClientes';

const Stack = createNativeStackNavigator();

export default function App() {
  const [clientes, setClientes] = useState([]);

  const agregarCliente = (nuevoCliente) => {
    setClientes([...clientes, nuevoCliente]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListarClientes">
        <Stack.Screen 
          name="Home" 
          options={{ title: 'Registro de Clientes' }}
        >
          {props => <HomeScreen {...props} onGuardar={agregarCliente} />}
        </Stack.Screen>
        <Stack.Screen name="ListarClientes">
          {props => <ListarClientes {...props} clientes={clientes} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}