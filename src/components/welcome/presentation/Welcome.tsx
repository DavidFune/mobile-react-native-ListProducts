import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {ProductionListContainer} from "../../produc-list/container/ProductionListContainer"

class WelcomeProps {

}

// const Stack = createStackNavigator

const Welcome: React.FC = ({}) => {
  return (
      <View style={{
          alignSelf: "center",
          alignItems: "center",
          justifyContent:"center",
          height:"50%",
          width:"50%",
          backgroundColor:"#b87fee",
          marginTop:"30%"


      }}>
          <Text style={{
              fontFamily:"Open Sans",
              color:"#ffffff",
              fontSize: 20,
              textAlign:"center"}}>
            Bem vindo a lista de Produtos!!!
          </Text>

          <Button
          title="Vamos ver os Produtos???"
          color="#D0AAF3"
          onPress={() => {
              console.log("click");
              
              return <ProductionListContainer></ProductionListContainer>
          }}/>
      </View>
  )
}

export {Welcome};