import React, { createContext, useReducer } from 'react';
import { Product } from 'src/models/Product';
import { cartReducer } from 'src/reducers/cart/reducer'

interface CartContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  cleanCart: () => void;
}
export const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [ cartState, dispatch ] = useReducer(
    cartReducer,
    {
      products: [],
    },
    (initialState) => ({ ...initialState })
  )

  const { products } = cartState
  function addProduct(product: Product) {
    dispatch({ type: 'ADD_TO_CART', payload: { product } })
  }

  function removeProduct(product: Product) {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { product } })
  }

  function cleanCart() {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <CartContext.Provider value={{
      products,
      addProduct,
      removeProduct,
      cleanCart
    }}>
      {children}
    </CartContext.Provider>
  );
}