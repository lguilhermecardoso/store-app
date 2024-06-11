import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ProductCard } from '../index';
import { CartContext } from '@contexts/CartContext';
import { ThemeProvider } from 'styled-components/native'
import theme from '@theme/index'

const mockProduct = {
  id: '1',
  name: 'Product 1',
  imageUrl: 'http://example.com/product1.png',
  price: 100
};

describe('ProductCard', () => {
  it('should render correctly', () => {
    const { getByText, getByTestId } = render(
      <CartContext.Provider value={{ products: [], addProduct: jest.fn(), removeProduct: jest.fn() }}>
        <ThemeProvider theme={theme}>
          <ProductCard product={mockProduct} />
        </ThemeProvider>
      </CartContext.Provider>
    );

    expect(getByText(mockProduct.name)).toBeTruthy();
    expect(getByTestId('product-image').props.source.uri).toBe(mockProduct.imageUrl);
  });

  it('should call addProduct when add button is pressed', () => {
    const addProduct = jest.fn();
  
    const { getByTestId } = render(
      <CartContext.Provider value={{ products: [], addProduct, removeProduct: jest.fn() }}>
        <ThemeProvider theme={theme}>
          <ProductCard product={mockProduct} />
        </ThemeProvider>
      </CartContext.Provider>
    );
  
    fireEvent.press(getByTestId('add-button'));
    expect(addProduct).toHaveBeenCalledWith(mockProduct);
  });

  it('should call removeProduct when remove button is pressed', () => {
    const removeProduct = jest.fn();

    const { getByText } = render(
      <CartContext.Provider value={{ products: [mockProduct], addProduct: jest.fn(), removeProduct }}>
        <ThemeProvider theme={theme}>
          <ProductCard product={mockProduct} />
        </ThemeProvider>
      </CartContext.Provider>
    );

    fireEvent.press(getByText('Remover'));
    expect(removeProduct).toHaveBeenCalledWith(mockProduct);
  });
});