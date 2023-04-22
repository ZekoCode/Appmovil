import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from "react-native";
import axios from "axios";
import { TextInput } from "react-native-gesture-handler";

import Itemusuarios from "../componentes/Itemusuarios";

export default function Inicio({ navigation }) {
    const [count, setcount] = useState(1);
    const [conteo, setconteo] = useState(0);

    const [Usuario, setUsuario] = useState();
    const [Password, setPassword] = useState();
    const [ListaUsuarios, setListaUsuarios] = useState();
    const [nombre_user, setnombre_user] = useState(Usuario);
    const [password_user, setpassword_user] = useState(Password); 

    const [consulta, setConsulta] = useState(0);

    useEffect(() => {
        getusuarios(Usuario, Password);
      }, [])
    
    const verificar =()=>{
        getusuarios(Usuario, Password)
        console.log(ListaUsuarios)
        if (ListaUsuarios != ""){
            navigation.navigate('Cuestionario', { valor: count, valor1: conteo }) 
        } else {
            Alert.alert("Usuario y/o Password no encontrado")
        }
    };
    
    const getusuarios = async(props) => {
        //const respuesta = await axios.get('http://192.168.100.10/Proyecto_cuestionario/apiweb')
        //const id_user=1;
        //const Usuario=2;
        const respuesta = await axios.get("http://192.168.100.10//Proyecto_cuestionario/apiweb/?nombre_user=" + Usuario + "&&password_user=" + Password);
        setListaUsuarios(respuesta.data)
        console.log(respuesta.data);
        //console.log(respuesta.status);
        console.log(respuesta.config);
       }

    const renderItemUsua = ({ item }) => (
            <Itemusuarios 
            id_user={item.id_user}
            nombre_user={item.nombre_user} 
            password_user={item.password_user} 
            activo_user={item.activo_user} 
        /> )


    return (
        <View style={styles.container}>
            <Text style={styles.parrafo}>
                Inicio
            </Text>
            
            <TextInput style={styles.formato}
            placeholder="Usuario"
            keyboardType="default"
            onChangeText={setUsuario}
            value={Usuario}
            />
            
            <TextInput style={styles.formato}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={Password}
            />
            
            <TouchableOpacity 
                style={styles.button}
                onPress={verificar}
            >
                <Text style={styles.parrafo}>Iniciar</Text>
            </TouchableOpacity>

            <Text style={styles.parrafo1}>Presentacion de los Datos</Text>
            
            <FlatList
                style={{ marginTop: 20 }}
                data={ListaUsuarios}
                renderItem={renderItemUsua}
                keyExtractor={item => item.id_user}
            />
            
        </View>
    );
}
  
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    parrafo:{
        color: "#062c7e",
        fontSize: 20,
        fontWeight: "bold",
    },
    parrafo1:{
        color: "#062c7e",
        fontSize: 20,
        fontWeight: "bold",
        margin: 20,
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
    formato: {
        color: "#000000",
        backgroundColor: "#e5fadd",
        fontWeight: "bold",
        fontSize: 25,
        width: "80%",
        height: 50,
        textAlign: "center",
        borderRadius: 15,
        marginTop: 20,
        borderColor: "#01A524",
        borderWidth: 2,
    },
});