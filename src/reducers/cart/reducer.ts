import { Product } from 'src/models/Product';
import { ActionTypes } from './actions';


export interface CartState {
  products: Product[];
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload.product]
      }
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.payload.product.id)
      }
    case ActionTypes.CLEAR_CART:
      return {
        ...state,
        products: []
      }
    default:
      return state;
  }
}