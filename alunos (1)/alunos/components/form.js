import * as React from 'react';
import { Text, TextInput, View, Button, FlatList, Number, NumberInput, StyleSheet } from 'react-native';
import {DADOS} from '../App';

import DatePicker from 'react-native-datepicker';



export default class Form extends React.Component {

  constructor(props) {
    super(props)


    if(this.props.route.params == null) {
      this.state = {
        nome:null,
        matricula:null,
        nascimento:null,
        curso:null,
        ano:null
      }
    }else{
       for(i=0;i<global.dados.length;i++) {
        if(global.dados[i].id == this.props.route.params.id) {
          this.state = {
            nome:global.dados[i].nome,
            matricula:global.dados[i].matricula,
            nascimento:global.dados[i].nascimento,
            curso:global.dados[i].curso,
            ano:global.dados[i].ano
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

  setMatricula = (text) => {
    this.setState({
      matricula:text
    })
  }

  setNacimento = (text) => {
    this.setState({
      nascimento: text
    })
  }

  setCurso = (text) => {
    this.setState({
      curso: text
    })
  }

  setAno = (text) => {
    this.setState({
      ano: text
    })
  }


  buttonSalvar = () => {
    if(this.props.route.params == null) {
      global.dados.push({
        nome:this.state.nome,
        matricula:this.state.matricula,
        nascimento:this.state.nascimento,
        curso:this.state.curso,
        ano:this.state.ano,
        id: new Date()  
      })
    }else{
      for(i=0;i<global.dados.length;i++) {
        if(global.dados[i].id == this.props.route.params.id) {
          global.dados[i].nome = this.state.nome,
          global.dados[i].preco = this.state.preco,
          global.dados[i].nascimento = this.state.nascimento,
          global.dados[i].curso = this.state.curso,
          global.dados[i].ano = this.state.ano
        }
      }
    }
    
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View>
        <Text style={css.letras}>Nome</Text>
        <TextInput style={css.input} onChangeText={this.setNome} value={this.state.nome} placeholder="Digite o seu nome..."/>
        <Text style={css.letras}>Matricula</Text>
        <TextInput style={css.input} onChangeText={this.setMatricula} value={this.state.matricula} placeholder="Digite sua Matricula..." />
        <Text style={css.letras}>Nascimento</Text>
        <TextInput style={css.input} onChangeText={this.setNascimento} value={this.state.nascimento} placeholder="Digite a sua data de Nascimento..." />
        <Text style={css.letras}>Curso</Text>
        <TextInput style={css.input} onChangeText={this.setCurso} value={this.state.curso} placeholder="Digite o seu curso..." />
        <Text style={css.letras}>Semestre e Ano de Inicio:</Text>
        <TextInput style={css.input} onChangeText={this.setAno} value={this.state.ano} placeholder="Digite o Semestre e ano inicial..."/>
        <Button color="#24434b" title="Salvar" onPress={this.buttonSalvar} />
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
    color: "#24434b",
    marginBottom: "5px"
  }
})