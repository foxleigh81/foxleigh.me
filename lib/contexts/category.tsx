import React, { createContext } from 'react';
import { useQuery } from '@apollo/client';
import GET_CATEGORIES from '../graphql/get-categories';

const CategoryContext = createContext({});

export const CategoryProvider = props => {
  const { loading, data } = useQuery(GET_CATEGORIES);
  const categories = loading || data.allCategories.node
  return <CategoryContext.Provider value={categories}>{props.children}</CategoryContext.Provider>
}
export const CategoryConsumer = CategoryContext.Consumer;
export default CategoryContext;