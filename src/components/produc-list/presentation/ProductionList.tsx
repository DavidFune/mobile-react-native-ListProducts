import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { ProductsListData } from "../types/ProductsListData";
import { ProductData } from "../../produc-card/types/ProductData"
import { List } from 'react-native-paper';


// import { Container } from './styles';

class ProductionListProps {
  productslist?: ProductsListData
}

const listItem = (item: ProductData) => {
  return(
    <ScrollView>
      <List.Item
      key={item._id}
      title={item.title}
      description={item.description}
      />
    </ScrollView>
  );

}


const ProductionList = (props: ProductionListProps) => {
  return (
      <View>
        {props.productslist?.docs.map(product =>(
          listItem(product)
        ))}
      </View>
  );
}

export { ProductionList, ProductionListProps };