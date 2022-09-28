import * as React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
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
          <Stack.Screen  name="form" component={Form} options={{ title:"Novo Produto"}} />
          <Stack.Screen style={css.titulo} name="home" component={Home} options={{ title:"Lista de produtos"}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const css = StyleSheet.create({
  titulo:{
    fontFamily: "Times New Roman",
    color: "gray"
  }

})