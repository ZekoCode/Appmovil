import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

    

export default function Itemresultado (props) {
    
    return (
        
        <View style={styles.vista}>
            <View style={styles.container}>
                <Text style={styles.ingreso}>
                    Usuario: {props.Usuario}
                </Text>
                <Text style={styles.ingreso}>
                    Puntos: {props.Puntos}
                </Text>
                <Text style={styles.ingreso}>
                    Total de respuestas: {props.Total}
                </Text>
                <Text style={styles.ingreso}>
                    Total de aciertos: {props.Porcentaje}
                </Text>
                <Text style={styles.ingreso}>
                    Total de errores: {100 - parseFloat(props.Porcentaje)}
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
        color: "white",
        fontSize: 20,
        paddingTop: 10,
    },
});