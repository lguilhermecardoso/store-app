import { ActivityIndicator } from "react-native";
import { Container } from "./styles";
import theme from "@theme/index";

export function Loading() {
  return (
    <Container>
      <ActivityIndicator color={theme.COLORS.GREEN_700} />
    </Container>
  )
}