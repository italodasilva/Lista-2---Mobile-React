import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Form from './components/form'
import Home from './components/home'


global.dados = []

const Stack = createNativeStackNavigator()

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="form" component={Form} options={{ title:"Cadastro de Alunos"}} />
          <Stack.Screen name="home" component={Home} options={{ title:"Lista de Alunos"}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
