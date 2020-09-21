import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { ProductsListData } from "../types/ProductsListData";
import { ProductData } from "../../product-card/types/ProductData"
import { List } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';



// import { Container } from './styles';

class ProductionListProps {
  productslist?: ProductsListData
}

const Stack = createStackNavigator()

const ProductionList = ({props, navigation}:{
  props: ProductionListProps,
  navigation: any,
}) => {
  return (
      <ScrollView>
        {props.productslist?.docs.map(product =>
              <List.Item
              key={product._id}
              title={product.title}
              description={product.description}
              onPress={() => {navigation.navigate('Produto', {item: product})} }/>
          )}
      </ScrollView>
  );
}

const ProductionListScreen = ( props: ProductionListProps) =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Item" component={(ProductionList)}></Stack.Screen>
    </Stack.Navigator>
  );
}




export { ProductionList, ProductionListProps };