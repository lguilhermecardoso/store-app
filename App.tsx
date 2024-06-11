import { Home } from "@screens/Home";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";
import { CartProvider } from "src/contexts/CartContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartProvider>
    </ThemeProvider>
  );
}

