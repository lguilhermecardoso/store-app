import { cartReducer, CartState } from '../reducer';
import { ActionTypes } from '../actions';
import { Product } from 'src/models/Product';

describe('cartReducer', () => {
  const initialState: CartState = {
    products: []
  };

  it('should handle ADD_TO_CART', () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Product 1',
      imageUrl: 'http://example.com/product1.png',
      price: 100
    };
    const action = {
      type: ActionTypes.ADD_TO_CART,
      payload: {
        product: mockProduct
      }
    };
    const expectedState: CartState = {
      products: [mockProduct]
    };
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_FROM_CART', () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Product 1',
      imageUrl: 'http://example.com/product1.png',
      price: 100
    };
    const initialState: CartState = {
      products: [mockProduct]
    };
    const action = {
      type: ActionTypes.REMOVE_FROM_CART,
      payload: {
        product: mockProduct
      }
    };
    const expectedState: CartState = {
      products: []
    };
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_CART', () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Product 1',
      imageUrl: 'http://example.com/product1.png',
      price: 100
    };
    const initialState: CartState = {
      products: [mockProduct]
    };
    const action = {
      type: ActionTypes.CLEAR_CART
    };
    const expectedState: CartState = {
      products: []
    };
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });
});