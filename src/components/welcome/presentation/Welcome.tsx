import React from 'react';
import { View, Text, Button } from 'react-native';
import { ProductionListContainer } from "../../produc-list/container/ProductionListContainer"
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
        height: "50%",
        width: "50%",
        backgroundColor: "#b87fee",
        marginTop: "30%"


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
              console.log("click");
              navigation.navigate("Produtos")
          }}/>
    </View>)

}

const Welcome: React.FC = ({ }) => {
    return (
        <Stack.Navigator initialRouteName="Lista de Produtos">
            <Stack.Screen name="Lista de Produtos" component={goListProduct}></Stack.Screen>
            <Stack.Screen name="Produtos" component={ProductionListContainer} />
        </Stack.Navigator>

    )
}

export { Welcome };