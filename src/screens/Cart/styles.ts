import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_10};
`;
export const CartArea = styled.ScrollView`
  padding: 20px;
`;
export const CartTitle = styled.Text``;

interface CartItemProps {
  isLastChild?: boolean;
}
export const CartItem = styled.View<CartItemProps>`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  padding-bottom: ${(props) => (props.isLastChild ? '80px' : '0')};
`;

export const CartItemImg = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const CartItemText = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const CartItemRemove = styled.TouchableOpacity`
  padding: 2px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS.RED};
`;

export const CartFinishButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GREEN_500};
  padding: 20px;
  align-items: center;
`;

export const CartFinishButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: bold;
`;