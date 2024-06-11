import { useContext } from "react";
import { CartArea, CartFinishButton, CartFinishButtonText, CartItem, CartItemImg, CartItemRemove, CartItemText, CartTitle, Container } from "./styles";
import { Header } from "@components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CartContext } from "@contexts/CartContext";

export function Cart() {

  const { products, removeProduct } = useContext(CartContext);

  function handleRemoveProductFromCart() {
    removeProduct(products[0])
  }

  return (
    <Container>
      <Header onBack isHome={false} />
      <CartArea>
        
        {products.length === 0 
        ?
          <CartTitle>Nenhum produto adicionado</CartTitle>
        : (
          <>
            <CartTitle>{products.length} Produtos adicionados:</CartTitle>
            {products.map((product, index) => (
              <CartItem key={product.id} isLastChild={index === products.length - 1}>
                <CartItemImg source={{ uri: product.imageUrl }} />
                <CartItemText>{product.name}</CartItemText>
                <CartItemRemove testID={`remove-button-${product.id}`} onPress={handleRemoveProductFromCart}>
                  <MaterialCommunityIcons name="minus" size={18} color="white" />
                </CartItemRemove>
              </CartItem>
            ))}
          </>
        )}
      </CartArea>
      <CartFinishButton>
        <CartFinishButtonText>Finalizar Compra</CartFinishButtonText>
      </CartFinishButton>
    </Container>
  )
}