import { render, fireEvent } from '@testing-library/react-native';
import { Cart } from '@screens/Cart';
import { CartContext } from '@contexts/CartContext';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';

describe('Cart Component', () => {
  it('should render correctly when cart is empty', () => {
    const mockContext = {
      products: [],
      removeProduct: jest.fn(),
    };

    const { getByText } = render(
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <CartContext.Provider value={mockContext}>
            <Cart />
          </CartContext.Provider>
        </ThemeProvider>
      </NavigationContainer>
    );

    expect(getByText('Nenhum produto adicionado')).toBeTruthy();
  });

  it('should render correctly when cart has products', () => {
    const mockContext = {
      products: [
        { id: '1', name: 'Product 1', imageUrl: 'http://example.com/product1.jpg' },
        { id: '2', name: 'Product 2', imageUrl: 'http://example.com/product2.jpg' },
      ],
      removeProduct: jest.fn(),
    };

    const { getByText } = render(
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <CartContext.Provider value={mockContext}>
            <Cart />
          </CartContext.Provider>
        </ThemeProvider>
      </NavigationContainer>
    );

    expect(getByText('2 Produtos adicionados:')).toBeTruthy();
    expect(getByText('Product 1')).toBeTruthy();
    expect(getByText('Product 2')).toBeTruthy();
  });

  it('should call removeProduct when remove button is pressed', () => {
    const mockRemoveProduct = jest.fn();

    const mockContext = {
      products: [
        { id: '1', name: 'Product 1', imageUrl: 'http://example.com/product1.jpg' },
      ],
      removeProduct: mockRemoveProduct,
    };

    const { getByTestId } = render(
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <CartContext.Provider value={mockContext}>
            <Cart />
          </CartContext.Provider>
        </ThemeProvider>
      </NavigationContainer>
    );

    fireEvent.press(getByTestId('remove-button-1'));

    expect(mockRemoveProduct).toHaveBeenCalledWith(mockContext.products[0]);
  });
});