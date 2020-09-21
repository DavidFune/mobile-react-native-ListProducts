import React from 'react';
import { View, Text, Button } from 'react-native';
import { ProductionListContainer } from "../../product-list/container/ProductionListContainer"
import { createStackNavigator } from '@react-navigation/stack';

class WelcomeProps {

}

const Stack = createStackNavigator()

function goListProduct({ navigation }: {
    navigation: any
}) {
    return (
    <View style={{
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "#b87fee",


    }}>
        <Text style={{
            fontFamily: "Open Sans",
            color: "#ffffff",
            fontSize: 20,
            textAlign: "center"
        }}>
            Bem vindo a lista de Produtos!!!
        </Text>
        <Button
          title="Vamos ver os Produtos???"
          color="#D0AAF3"
          onPress={() => {
              navigation.navigate("Produtos")
          }}/>
    </View>)

}

const Welcome = ({ }) => {
    return (
        <Stack.Navigator initialRouteName="Lista de Produtos">
            <Stack.Screen name="Lista de Produtos" component={goListProduct}></Stack.Screen>
        </Stack.Navigator>

    )
}

export { Welcome };