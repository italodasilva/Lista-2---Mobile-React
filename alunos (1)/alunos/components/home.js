import React, { useState, useEffect } from 'react';
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';



export const DADOS = React.createContext([])

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lista: global.dados
    }

    this.props.navigation.addListener('focus', this.atualizarLista);
  }

  atualizarLista = () => {
    this.setState({
      lista: global.dados
    })
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <View style={{ width: '80%'}} >
          <Text>Nome: {item.nome}</Text>
          <Text>Matricula: {item.matricula}</Text>
          <Text>Nascimento: {item.nascimento}</Text>
          <Text>Curso: {item.curso}</Text>
          <Text>Ano: {item.ano}</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>  
          <Button color="orange" title="E" onPress={ () => this.buttonEditar(item.id) }/>
          <Button color="red" title="X" onPress={ () => this.buttonExcluir(item.id) }/>
        </View>        
      </TouchableOpacity>
      )
  }

  buttonAdicionar =  () => {
    this.props.navigation.push("form")
  }

  buttonExcluir = (id) => {
    for(i=0;i<global.dados.length;i++) {
      if(global.dados[i].id==id) {
        if(confirm("Deseja realmente excluir "+global.dados[i].nome+"?")) {
          global.dados.splice(i,1)
          this.atualizarLista()
          return
        }
      }
    }
  }

  buttonEditar = (id) => {
    this.props.navigation.push("form", {
      id: id
    })
  }

  render() {
    return (
      <View>
        <Button color="#24434b" title="Adicionar Aluno" onPress={this.buttonAdicionar}/>
        <FlatList extraData={this.state} data={this.state.lista} renderItem={this.renderItem}/>
      </View>
    )
  }
}