import React from "react";
import { createStackNavigator, StackView } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from "react-native";
import {WelcomeContainer} from "./components/welcome/container/WelcomeContainer"
import {ProductionListContainer} from "./components/produc-list/container/ProductionListContainer"

interface RoutesProps{

}

function HomeScreen() {
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
  </View>
    );
  }

const Stack = createStackNavigator();

export const Routes: React.FC<RoutesProps> = ({}) => {

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome!!!'>
                <Stack.Screen name="Welcome" component={WelcomeContainer} />
                <Stack.Screen name="Lista de Produtos" component={ProductionListContainer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

