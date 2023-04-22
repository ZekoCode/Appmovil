import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet,FlatList ,View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import axios from 'axios'; //npm i axios


import Itemresultado from '../componentes/Itemresultado';
import * as app from "./global"


export default function Resultado( ) {
  
  const [ListaResultado, setListaResultado] = useState([])
  //const [Usuario, setUsuario] = useState(app.valor_id_user)
  
  useEffect(() => {
     getresultado(app.valor_id_user)
   }, [])
  
  const actualizar=()=>{
    getresultado(app.valor_id_user)
    console.log("app.valor_id_user");
    console.log(app.valor_id_user);
  }
 

   const getresultado = async(props) => {
    //const respuesta = await axios.get('http://192.168.100.10/Proyecto_cuestionario/apiweb')
    //const Usuario=1;
    //const Usuario=2;
    const respuestas = await axios.get("http://192.168.100.10//Proyecto_cuestionario/apiweb/?Usuario=" + app.valor_id_user);
    setListaResultado(respuestas.data)
    console.log(respuestas.data);
   }

  /*const conresultado = async (props) => {
    const Usuario = props.Usuario
    const respuestas = await axios.get('http://192.168.100.10//Proyecto_cuestionario/apiweb/?Usuario=' + Usuario)
    setUsuario(respuestas.data.Usuario)
    setPuntos(respuestas.data.Puntos)
    setTotal(respuestas.data.Total)
    setPorcentaje(respuestas.data.Porcentaje)
    console.log(respuestas.data);
  }*/



  const renderItemResu = ({ item }) => (
    <Itemresultado 
        Usuario={item.Usuario}
        Puntos={item.Puntos} 
        Total={item.Total} 
        Porcentaje={item.Porcentaje} 
    /> )


  return (

    <SafeAreaView style={styles.container}>
      
      <View style={{flex: 0.1, marginTop: 20, marginBottom: 25}}>
        <Text style={{fontWeight: 'bold', color: 'blue', fontSize: 20}}>
          RESULTADOS POR USUARIOS
        </Text>
      </View>
      
      <FlatList
        style={{ marginTop: 20 }}
        data={ListaResultado}
        renderItem={renderItemResu}
        keyExtractor={item => item.Usuario}
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={actualizar}
      >
        <Text style={styles.parrafo}>Actualizar</Text>
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
    height: 70,
    position: "relative",
    top: 10,
  },
});