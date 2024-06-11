import { currencyFormatter } from "@utils/formaters";
import { Container, ProductAddButton, ProductAddButtonText, ProductImage, ProductPrice, ProductRemoveButton, ProductRemoveButtonText, ProductTitle, ProductWrapper } from "./styles";
import { Product } from "src/models/Product";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext } from "react";
import { CartContext } from "src/contexts/CartContext";
interface ProductCardProps {
  product: Product;
}
export function ProductCard({product}: ProductCardProps) {

  const { addProduct, products, removeProduct } = useContext(CartContext)
  function handleAddProductToCart() {
    addProduct(product)
  }

  function handleRemoveProductFromCart() {
    removeProduct(product)
  }

  function isProductInCart() {
    return products.some(p => p.id === product.id)
  }
  return (
    <Container>
      <ProductWrapper>
        <ProductImage source={{uri: product.imageUrl}}/>
        <ProductTitle> {product.name} </ProductTitle>
        <ProductPrice> {currencyFormatter(product.price)} </ProductPrice>
        {isProductInCart() ? (
          <ProductRemoveButton onPress={handleRemoveProductFromCart}>
            <MaterialCommunityIcons name="cart-remove" size={20} color="white" />
            <ProductRemoveButtonText>Remover</ProductRemoveButtonText>
          </ProductRemoveButton>
        ) : (
          <ProductAddButton onPress={handleAddProductToCart}>
            <ProductAddButtonText>
              <MaterialCommunityIcons name="cart-plus" size={20} color="white" />
              Comprar
            </ProductAddButtonText>
          </ProductAddButton>
        )}
      </ProductWrapper>
    </Container>
  )
}