import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Bienvenida from "../screen/Bienvenida";
import Inicio from "../screen/Inicio";
import Cuestionario from "../screen/Cuestionario";
import Resultado from "../screen/Resultado";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Root = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Bienvenida" component={Bienvenida}/>
            <Drawer.Screen name="Inicio" component={Inicio}/>
            <Drawer.Screen name="Resultado" component={Resultado}/>
        </Drawer.Navigator>
    );
}

const Navegar = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Root" component={Root}/>
                <Stack.Screen name="Cuestionario" component={Cuestionario}/>
                <Stack.Screen name="Resultados" component={Resultado}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navegar;