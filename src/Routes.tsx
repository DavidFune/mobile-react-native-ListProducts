import React from "react";
import { createStackNavigator, StackView } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from "react-native";
import {WelcomeContainer} from "./components/welcome/container/WelcomeContainer"
import {ProductionListContainer} from "./components/product-list/container/ProductionListContainer"
import { ProductCardContainer } from "./components/product-card/container/ProductCardContainer";

interface RoutesProps{

}

const Stack = createStackNavigator();

export const Routes = ({}) => {

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome!!!'>
                <Stack.Screen name="Welcome" component={WelcomeContainer} />
                <Stack.Screen name="Produtos" component={ProductionListContainer} />
                <Stack.Screen name="Produto" component={ProductCardContainer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

