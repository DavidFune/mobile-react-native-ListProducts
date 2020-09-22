import React, { useEffect, useState } from 'react';
import {ProductionList} from "../presentation/ProductionList"
//import {ProductionListScreen} from "../presentation/ProductionListScreen"
import { ProductsListData } from "../types/ProductsListData";
import productsApi from "../../../services/api/productsApi"
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator()


const ProductionListContainer = ({ navigation }: {
  navigation: any
}) => {
  
  const getProductionList = async():Promise<ProductsListData> => {
    const productionlist: ProductsListData = await (await productsApi.get('/products')).data
    return productionlist
  } 
  
  const[productionList, setProductionList] = useState<ProductsListData>({
    docs: [], total: 0,limit: 0, page: 0, pages: 0
})
  const[page, setPage] = useState<number>(1)

  useEffect(() => {
    getProductionList().then(data => {
      setProductionList(data)
    })
  },[page])

  const goToProduct = (productId: string) =>{
    navigation.navigate("Produto",{productId: productId})
  }
  
  return (
    <ProductionList 
    productslist={productionList}
     goToProduct={goToProduct}/>
  );
}

export  {ProductionListContainer};