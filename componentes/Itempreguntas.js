import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal, Alert} from 'react-native'

    

export default function Itempreguntas (props) {
    
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
    
    return (
        <View style={styles.vista}>
            <Text style={styles.ingreso}>
                {props.titulo_pre}
            </Text>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalvisible}
                onRequestClose={() => {
                    Alert.alert("Cerrado");
                    setmodalvisible(!modalvisible)
                }}
            >
                
                <View style={styles.modalcenter}>
                    <View style={styles.modalview}>
                        <Text style={styles.modaltext}>Informacion</Text>
                        <Text style={styles.modaltext1}>{props.descripcion_pre}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={onPressButton}
                        >
                            <Text>Cerrar</Text>
                        </TouchableOpacity>  
                    </View>
                </View>       
            </Modal>

            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={onPressResponder} disabled={modalhabilitar} >
                    <Text>Ayuda</Text>
                </TouchableOpacity>  
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
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: 10,
        textAlign: 'center',
        borderRadius: 20,
        fontSize: 20,
        fontWeight: "bold",
        elevation: 15,
        borderWidth: 1,
        borderColor: "#fff",
        justifyContent: 'center',
        width: "100%",
        height: 50,
        position: "relative",
        marginTop: 10,
        marginBottom: 10,
        color: 'red',
    },
    modalcenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,

    },
    modalview: {
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: "#ccfafd",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,

    },
    modaltext: {
        fontSize: 30,
        color: "#107a07",
        marginTop: 10,
        textAlign: 'center',

    },
    modaltext1: {
        fontSize: 20,
        color: "#07447b",
        marginTop: 15,
        textAlign: 'center',
    },
});
