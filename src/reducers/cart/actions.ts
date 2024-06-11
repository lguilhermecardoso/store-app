import { Product } from "src/models/Product";

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CLEAR_CART = 'CLEAR_CART'
}

export function AddToCartAction(product: Product) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      product
    }
  }
}

export function RemoveFromCartAction(product: Product) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      product
    }
  }
}

export function ClearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART
  }
}
