import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import {ProductionList} from "../presentation/ProductionList"

// import { Container } from './styles';
const Stack = createStackNavigator();

const ProductionListContainer: React.FC = () => {
  return <ProductionList />;
}

export  {ProductionListContainer};