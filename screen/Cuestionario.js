import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet,FlatList ,View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios'; //npm i axios


import Itempreguntas from '../componentes/Itempreguntas';
import Itemrespuestas from '../componentes/Itemrespuestas';


export default function Cuestionario({route}) {

  const {valor}=route.params;

  const [ListaPreguntas, setListaPreguntas] = useState([])
  const [ListaRespuestas, setListaRespuestas] = useState([])
  const [id_pre, setid_pre] = useState(valor)
  const [t_preguntas_id_pre, sett_preguntas_id_pre] = useState(valor)
  const [count, setcount] = useState(valor)

  const [modalvisible, setmodalvisible]= useState(false)
  const [modalhabilitar, setmodalhabilitar] = useState(false)

  const onPressButton=()=>{
      setmodalvisible(!modalvisible)
      setmodalhabilitar(true)
  }

  const onPressResponder=()=>{
      setmodalvisible(true)
      setmodalhabilitar(true)
      //Se realizara el conteo de aciertos
  }
  
  useEffect(() => {
     getpreguntas(id_pre)
     getrespuestas(t_preguntas_id_pre)
   }, [])
 
  const next = () => {
    setcount(count+1)
    setid_pre(count)
    sett_preguntas_id_pre(count)
    getpreguntas(id_pre)
    getrespuestas(t_preguntas_id_pre)
  }

  const getpreguntas = async(props) => {
    //const respuesta = await axios.get('http://192.168.100.10/Proyecto_cuestionario/apiweb')
    //const id_pre=3;
    const respuesta = await axios.get("http://192.168.100.10//Proyecto_cuestionario/apiweb/?id_pre=" + id_pre);
    setListaPreguntas(respuesta.data)
    console.log(respuesta.data);
   }

  const getrespuestas = async(props) => {
    //const respuesta = await axios.get('http://192.168.100.10/Proyecto_cuestionario/apiweb')
    //const t_preguntas_id_pre=3;
    const respuesta = await axios.get("http://192.168.100.10//Proyecto_cuestionario/apiweb/?t_preguntas_id_pre=" + t_preguntas_id_pre);
    setListaRespuestas(respuesta.data)
    console.log(respuesta.data);
   }


  const renderItem = ({ item }) => (
    <Itempreguntas 
      id_pre={item.id_pre}
      titulo_pre={item.titulo_pre} 
      descripcion_pre={item.descripcion_pre} 
      valor_pre={item.valor_pre} 
      t_categorias_id_cat={item.t_categorias_id_cat} 
    /> )

  const renderItemRes = ({ item }) => (
    <Itemrespuestas 
     
      valor_detalle_resu={item.respuesta_res}
      valor_valorpuntos_resu={item.correcta_res}
      valor_t_usuarios_id_user="2"
      id_res={item.id_res}
      respuesta_res={item.respuesta_res} 
      detalle_res={item.detalle_res} 
      correcta_res={item.correcta_res} 
      t_preguntas_id_pre={item.t_preguntas_id_pre} 
    /> )

  return (

    <SafeAreaView style={styles.container}>
      
      <View style={{flex: 0.1, marginTop: 20, marginBottom: 25}}>
        <Text style={{fontWeight: 'bold', color: '#0E69E5', fontSize: 20}}>
          ACCESO A DATOS
        </Text>
      </View>
      
      <FlatList
        style={{ marginTop: 20 }}
        data={ListaPreguntas}
        renderItem={renderItem}
        keyExtractor={item => item.id_pre}
      />

      <FlatList
        style={{ marginTop: 20 }}
        data={ListaRespuestas}
        renderItem={renderItemRes}
        keyExtractor={item => item.id_res}
      />

      <TouchableOpacity style={styles.button} onPress={next}>
        <Text style={styles.parrafo}>Siguiente</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parrafo:{
    color: "#062c7e",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    fontSize: 30,
    borderRadius: 20,
    fontWeight: "bold",
    elevation: 15,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    width: "50%",
    height: 40,
    position: "relative",
    top: 10,
  },
});