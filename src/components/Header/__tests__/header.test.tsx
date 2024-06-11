import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { CartContext } from '@contexts/CartContext';
import { Header } from '@components/Header';
import theme from '@theme/index';

describe('Header Component', () => {
  it('should render CartButton', () => {
    const mockCartContext = {
      products: [{ id: '1', name: 'Product 1' }, { id: '2', name: 'Product 2' }]
    };

    render(
      <CartContext.Provider value={mockCartContext}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Header />
          </NavigationContainer>
        </ThemeProvider>
      </CartContext.Provider>
    );

    const cartButton = screen.getByTestId('cart-button');
    expect(cartButton).toBeTruthy();

    const cartSpan = screen.getByTestId('cart-span');
    expect(cartSpan.props.children).toEqual(mockCartContext.products.length);
  });

  it('should to render back button', () => {
    const mockCartContext = {
      products: [{ id: '1', name: 'Product 1' }, { id: '2', name: 'Product 2' }]
    };

    render(
      <CartContext.Provider value={mockCartContext}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Header onBack />
          </NavigationContainer>
        </ThemeProvider>
      </CartContext.Provider>
    );

    const backButton = screen.getByTestId('back-button');
    expect(backButton).toBeTruthy();
  });

  it('should to render without back button', () => {
    const mockCartContext = {
      products: [{ id: '1', name: 'Product 1' }, { id: '2', name: 'Product 2' }]
    };

    render(
      <CartContext.Provider value={mockCartContext}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Header />
          </NavigationContainer>
        </ThemeProvider>
      </CartContext.Provider>
    );

    const backButton = screen.queryByTestId('back-button');
    expect(backButton).toBeNull();
  });
});