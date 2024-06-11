import { ScrollView } from "react-native";
import { Container, HomePageSubTitle, HomePageTitle, Loading, ProductHeaderArea, ProductListCategory, ProductListCount, ProductListGridArea, ProductListWrapper, ShowMoreButton, ShowMoreButtonText } from "./styles";
import { Header } from "@components/Header";
import { useEffect, useState } from "react";
import { api } from "@src/lib/axios";
import { ProductCard } from "@components/ProductCard";
import { Product } from "src/models/Product";

export function Home() {
  const [products, setProducts] = useState<Product []>([]);
  const [loading, setIsloading] = useState(false);

  async function getProducts() {
    try {
      setIsloading(true);
      const response = await api.get("/product");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      <Header isHome/>
      <ScrollView>
        <HomePageTitle>
          Nossos produtos & Serviços
        </HomePageTitle>
        <HomePageSubTitle>
          Confira nossas melhores ofertas separadas especialmente para você
        </HomePageSubTitle>
        {loading ? 
        (<Loading testID="loading-indicator" />) 
          : 
        (
          <>
            <ProductHeaderArea>
              <ProductListWrapper>
                <ProductListCategory>
                  Produtos
                </ProductListCategory>
                <ProductListCount>{products.length}</ProductListCount>
              </ProductListWrapper>
              <ShowMoreButton>
                <ShowMoreButtonText>Ver mais</ShowMoreButtonText>
              </ShowMoreButton>
            </ProductHeaderArea>
            <ProductListGridArea testID="product-list">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} testID={`product-${product.id}`} />
                ))}         
            </ProductListGridArea>
          </>
        )}
      </ScrollView>
    </Container>
  )
}
