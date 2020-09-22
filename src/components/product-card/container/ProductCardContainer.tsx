import { format } from 'prettier';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {ProductCard} from '../presentation/ProductCard'
import {ProductData} from '../types/ProductData'
import productsApi from "../../../services/api/productsApi"
import { ProductsListData } from '../../product-list/types/ProductsListData';


// import { Container } from './styles';

const ProductCardContainer = ({ navigation, route }: {
  navigation: any,
  route: any
}) => {

  const getProduct = async(productId: string):Promise<ProductData> => {
    const productionlist: ProductsListData = await (await productsApi.get('/products')).data
    const product: ProductData = productionlist.docs.map(product => product._id == productId)
    return product
  } 

  const [product, setProdutc] = useState<ProductData>({  
    _id: '',
    title: '',
    description: '',
    url:'' ,
    createdAt:'',
    _v: ''})

    useEffect(() => {
      getProduct(route.params.productId).then(data => {
        setProdutc(data)
      })
    },[])

    console.log("ROUTE",route.params);
    

  return <ProductCard />;
}

export  {ProductCardContainer};