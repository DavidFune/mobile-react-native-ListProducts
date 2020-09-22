import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { ProductsListData } from "../types/ProductsListData";
import { ProductData } from "../../product-card/types/ProductData"
import { List } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';



// import { Container } from './styles';

class ProductionListProps {
  productslist: ProductsListData
  goToProduct: (productId: string) => void
}

const ProductionList = (props: ProductionListProps) => {
  return (
      <ScrollView>
        {props.productslist?.docs.map(product =>
              <List.Item
              key={product._id}
              title={product.title}
              description={product.description}
             onPress={ () => props.goToProduct(product._id.toString())}
              />
          )}
      </ScrollView>
  );
}

export { ProductionList, ProductionListProps };