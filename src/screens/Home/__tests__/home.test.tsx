import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '@screens/Home';
import { api } from '@src/lib/axios';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';
import { CartProvider } from '@contexts/CartContext';

jest.mock('@src/lib/axios');

describe('Home', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <Home />
          </CartProvider>
        </ThemeProvider>
      </NavigationContainer>
    );
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('displays products when loading is false', async () => {
    const mockData = [
      {
        id: '1',
        name: 'Product 1',
        imageUrl: 'http://example.com/product1.png',
        price: 100
      },
      {
        id: '2',
        name: 'Product 2',
        imageUrl: 'http://example.com/product2.png',
        price: 200
      }
    ];

    (api.get as jest.Mock).mockResolvedValueOnce({ data: mockData });

    const { getByTestId } = render(
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <Home />
          </CartProvider>
        </ThemeProvider>
      </NavigationContainer>
    );

    await waitFor(() => expect(getByTestId('product-list')).toBeTruthy());

    mockData.forEach((product, index) => {
      expect(getByTestId(`product-${product.id}`)).toBeTruthy();
    });
  });
});