import React, { useEffect, useState } from 'react';
import {ProductionList} from "../presentation/ProductionList"
import { ProductsListData } from "../types/ProductsListData";
import productsApi from "../../../services/api/productsApi"



const ProductionListContainer: React.FC = () => {
  
  const getProductionList = async():Promise<ProductsListData> => {
    const productionlist: ProductsListData = await (await productsApi.get('/products')).data
    return productionlist
  } 

  async () =>{await getProductionList()}
  const[productionList, setProductionList] = useState<ProductsListData>()
  const[page, setPage] = useState<number | undefined>(1)

  useEffect(() => {
    getProductionList().then(data => {
      setProductionList(data)
    })
  },[page])

  console.log("Products",productionList);
  

  return <ProductionList />;
}

export  {ProductionListContainer};