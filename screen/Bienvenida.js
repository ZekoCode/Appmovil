import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Bienvenida() {
    return (
        <View style={styles.container}>
            <Text style={styles.parrafo}>
                Bienvenidos
            </Text>
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
});