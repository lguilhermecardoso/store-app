import { Platform } from 'react-native';
import styled from "styled-components/native";

interface ContainerProps {
  isHome?: boolean;
}
export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ isHome }) => isHome ? 'flex-end' : 'space-between'};
  padding: 0 20px;
  padding-bottom: 10px;
  margin-top: ${Platform.OS === 'ios' ? '35px' : '0'};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Logo = styled.Image`
  width: 46px;
  height: 56px;
`;
export const HeadersButtonsBase = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

export const CartButton = styled(HeadersButtonsBase)`
  margin-right: 10px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const CartSpanArea = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: -10px;
  right: -18px;
  background-color: ${({ theme }) => theme.COLORS.RED};
  border-radius: 10px;
  width: 20px;
  height: 20px;
`;

export const CartSpan = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 12px;
  text-align: center;
`;