import * as React from 'react';
import { Text, TextInput, View, Button, FlatList, StyleSheet } from 'react-native';
import {DADOS} from '../App';


export default class Form extends React.Component {

  constructor(props) {
    super(props)


    if(this.props.route.params == null) {
      this.state = {
        nome:null,
        cpf:null,
        rg:null,
        nascimento:null,
        telefone:null,
        email:null
      }
    }else{
       for(i=0;i<global.dados.length;i++) {
        if(global.dados[i].id == this.props.route.params.id) {
          this.state = {
            nome:global.dados[i].nome,
            cpf:global.dados[i].cpf,
            rg:global.dados[i].rg,
            nascimento:global.dados[i].nascimento,
            telefone:global.dados[i].telefone,
            email:global.dados[i].email,
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

  setcpf = (text) => {
    this.setState({
      cpf:text
    })
  }

  setrg = (text) => {
    this.setState({
      rg:text
    })
  }

  setnascimento = (text) => {
    this.setState({
      nascimento:text
    })
  }

  settelefone = (text) => {
    this.setState({
      telefone:text
    })
  }

  setemail = (text) => {
    this.setState({
      email:text
    })
  }


  buttonSalvar = () => {
    if(this.props.route.params == null) {
      global.dados.push({
        nome:this.state.nome,
        cpf:this.state.cpf,
        rg:this.state.rg,
        nascimento:this.state.nascimento,
        telefone:this.state.telefone,
        email:this.state.email,
        id: new Date()  
      })
    }else{
      for(i=0;i<global.dados.length;i++) {
        if(global.dados[i].id == this.props.route.params.id) {
          global.dados[i].nome = this.state.nome,
          global.dados[i].cpf = this.state.cpf,
          global.dados[i].rg = this.state.rg,
          global.dados[i].nascimento = this.state.nascimento,
          global.dados[i].telefone = this.state.telefone,
          global.dados[i].email = this.state.email
        }
      }
    }
    
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View>
        <Text style={css.letras}>Nome</Text>
        <TextInput style={css.input} placeholder="Digite o seu nome" onChangeText={this.setNome} value={this.state.nome}/>
        <Text style={css.letras}>CPF</Text>
        <TextInput style={css.input} placeholder="Digite o seu CPF" onChangeText={this.setcpf} value={this.state.cpf} />
        <Text style={css.letras}>RG</Text>
        <TextInput style={css.input} placeholder="Digite o seu RG" onChangeText={this.setrg} value={this.state.rg} />
        <Text style={css.letras}>Data de Nascimento</Text>
        <TextInput style={css.input} placeholder="Digite a sua data de nascimento" onChangeText={this.setnascimento} value={this.state.nascimento} />
        <Text style={css.letras}>Telefone</Text>
        <TextInput style={css.input} placeholder="Digite o seu telefone" onChangeText={this.settelefone} value={this.state.telefone} />
        <Text style={css.letras}>E-mail</Text>
        <TextInput style={css.input} placeholder="Digite o seu e-mail" onChangeText={this.setemail} value={this.state.email} />
        <Button color="blue" title="Salvar" onPress={this.buttonSalvar} />
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
    color: "blue",
    marginBottom: "5px"
  }
})