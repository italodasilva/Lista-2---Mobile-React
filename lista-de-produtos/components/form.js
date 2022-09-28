import * as React from 'react';
import { Text, TextInput, View, Button, FlatList, Number, NumberInput, StyleSheet } from 'react-native';
import {DADOS} from '../App';


export default class Form extends React.Component {

  constructor(props) {
    super(props)


    if(this.props.route.params == null) {
      this.state = {
        nome:null,
        preco:null,
        quantidade:null
      }
    }else{
       for(i=0;i<global.dados.length;i++) {
        if(global.dados[i].id == this.props.route.params.id) {
          this.state = {
            nome:global.dados[i].nome,
            preco:global.dados[i].preco,
            quantidade:global.dados[i].quantidade
          }
        }
      }
    }
  }

  setNome = (text) => {
    this.setState({
      nome:text
    })
  }

  setPreco = (text) => {
    this.setState({
      preco:text
    })
  }

  setQuantidade = (number) => {
    this.setState({
      quantidade:number
    })
  }


  buttonSalvar = () => {
    if(this.props.route.params == null) {
      global.dados.push({
        nome:this.state.nome,
        preco:this.state.preco,
        quantidade:this.state.quantidade,
        id: new Date()  
      })
    }else{
      for(i=0;i<global.dados.length;i++) {
        if(global.dados[i].id == this.props.route.params.id) {
          global.dados[i].nome = this.state.nome,
          global.dados[i].preco = this.state.preco,
          global.dados[i].quantidade = this.state.quantidade
        }
      }
    }
    
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View>
        <Text style={css.letras}>Nome:</Text>
        <TextInput style={css.input} placeholder="Digite o seu nome" onChangeText={this.setNome} value={this.state.nome}/>
        <Text style={css.letras}>Preco:</Text>
        <TextInput style={css.input} placeholder="Digite o preço" onChangeText={this.setPreco} value={this.state.preco} />
        <Text style={css.letras}>Quantidade:</Text>
        <TextInput placeholder="Digite a quantidade" style={css.input} onChangeText={this.setQuantidade} value={this.state.quantidade} />
        <Button color="green" title="Salvar" onPress={this.buttonSalvar} />
      </View>
    )
  }
}

const css = StyleSheet.create({
 letras:{
    fontSize: "18px",
    fontFamily: "Times new Roman",
    marginLeft: "10px",
    marginTop: "5px"
  },
  input:{
    marginLeft: "10px",
    color: "green",
    marginBottom: "5px"
  }
})