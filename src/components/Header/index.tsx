import theme from "@theme/index";
import { useNavigation } from "@react-navigation/native";
import { CartButton, CartSpan, CartSpanArea, Container, HeadersButtonsBase } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { useContext } from "react";
import { CartContext } from "@contexts/CartContext";

interface HeaderProps {
  onBack?: boolean;
  isHome?: boolean;
}

export function Header({ onBack = false, isHome = false }: HeaderProps) {
  const { products } = useContext(CartContext);
  const navigation = useNavigation();

  function handleOpenCart() {
    navigation.navigate('cart');
  }

  return (
    <Container isHome={isHome}>
      {onBack && (
        <HeadersButtonsBase
          testID="back-button"
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color={theme.COLORS.GREEN_500} />
        </HeadersButtonsBase>
      )}
      <CartButton
        onPress={handleOpenCart}
        testID="cart-button"
      >
        <CartSpanArea>
          <CartSpan testID="cart-span">{products.length}</CartSpan>
        </CartSpanArea>
        <MaterialIcons name="shopping-cart" size={24} color={theme.COLORS.GREEN_500} />
      </CartButton>
    </Container>
  )
}