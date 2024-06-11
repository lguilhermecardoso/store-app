import { AddToCartAction, RemoveFromCartAction, ClearCartAction, ActionTypes } from '../actions';
import { Product } from "src/models/Product";

describe('actions', () => {
  it('should create an action to add a product to cart', () => {
    const mockProduct: Product = {
      id: 1,
      name: 'Product 1',
      imageUrl: 'http://example.com/product1.png',
      price: 100
    };
    const expectedAction = {
      type: ActionTypes.ADD_TO_CART,
      payload: {
        product: mockProduct
      }
    };
    expect(AddToCartAction(mockProduct)).toEqual(expectedAction);
  });

  it('should create an action to remove a product from cart', () => {
    const mockProduct: Product = {
      id: 1,
      name: 'Product 1',
      imageUrl: 'http://example.com/product1.png',
      price: 100
    };
    const expectedAction = {
      type: ActionTypes.REMOVE_FROM_CART,
      payload: {
        product: mockProduct
      }
    };
    expect(RemoveFromCartAction(mockProduct)).toEqual(expectedAction);
  });

  it('should create an action to clear the cart', () => {
    const expectedAction = {
      type: ActionTypes.CLEAR_CART
    };
    expect(ClearCartAction()).toEqual(expectedAction);
  });
});