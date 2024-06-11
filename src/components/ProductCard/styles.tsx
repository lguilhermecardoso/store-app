import styled from "styled-components/native";


export const Container = styled.View`
  margin: 10px;
`;

export const ProductWrapper = styled.View`
  width: 145px;
`;

export const ProductImage = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 20px;
`;

export const ProductTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-weight: bold;
  margin-top: 10px;
`;

export const ProductPrice = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const ProductAddButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GREEN_500};
  padding: 8px;
  border-radius: 5px;
  margin-top: 6px;
  justify-content: center;
  align-items: center;
`;

export const ProductRemoveButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.RED_DARK};
  padding: 8px;
  border-radius: 5px;
  margin-top: 6px;
  justify-content: center;
  align-items: center;
`

export const ProductAddButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

export const ProductRemoveButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;