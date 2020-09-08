import React from "react";
import { createStackNavigator, StackView } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from "react-native";

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
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

