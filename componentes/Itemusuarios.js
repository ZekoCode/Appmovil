import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as app from "../screen/global"

    

export default function Itemusuarios(props) {
    app.valor_id_user = props.id_user;
    return (
        
        <View style={styles.vista}>
            <View style={styles.container}>
                <Text style={styles.ingreso}>
                    Usuario: {props.id_user}
                </Text>
                <Text style={styles.ingreso}>
                    Nombre: {props.nombre_user}
                </Text>
                <Text style={styles.ingreso}>
                    Contraseña: {props.password_user}
                </Text>
                <Text style={styles.ingreso}>
                    Activo: {props.activo_user}
                </Text>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    vista: {
        backgroundColor: "gray",
        borderRadius: 20,
        marginVertical: 5,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.80,
        elevation: 5,
    },
    container: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ingreso: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "red",
        fontSize: 20,
        paddingTop: 10,
    },
});