import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_10};
 `;

export const HomePageTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: bold;
  margin: 0 20px;
  margin-top: 20px;
`;

export const HomePageSubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin: 0 20px;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const ProductHeaderArea = styled.View`
  flex-direction: row;
  align-items: center;
`;


export const ProductListWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const ShowMoreButton = styled.TouchableOpacity`
  margin-right: 20px;
`;
export const ShowMoreButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GREEN_500};
  margin-right: 5px;
`;

export const ProductListCategory = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin: 20px;
  margin-right: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const ProductListCount = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const ProductListGridArea = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  gap: 20px;
`;

export const Loading = styled.ActivityIndicator`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;