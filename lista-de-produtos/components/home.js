import React, { useState, useEffect } from 'react';
import { Text, View, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

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
          <Text style={css.letras}>Nome: {item.nome}</Text>
          <Text style={css.letras}>Preço: {item.preco}</Text>
          <Text style={css.letras}>Quantidade: {item.quantidade}</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>  
          <Button title="E" color="orange" onPress={ () => this.buttonEditar(item.id) }/>
          <Button title="X" color="red" onPress={ () => this.buttonExcluir(item.id) }/>
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
        <Button color="green"  title="Adicionar produto" onPress={this.buttonAdicionar}/>
        <FlatList extraData={this.state} data={this.state.lista} renderItem={this.renderItem}/>
      </View>
    )
  }
}

const css = StyleSheet.create({
  letras:{
    fontSize: "18px",
    fontFamily: "Times new Roman",
    marginLeft: "10px"
  },

})

