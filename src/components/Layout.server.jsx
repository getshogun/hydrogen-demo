import { useCart, useShopQuery, gql, Link, Seo } from "@shopify/hydrogen";
import Header from "./Header.client";

export function Layout({ children }) {
  const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    preload: true,
  });

  return (
    <>
      <Seo
        type="defaultSeo"
        data={{
          title: shop.name,
          description: shop.description,
        }}
      />
      
      <Header shop={shop} />
      <main role="main" id="mainContent">
        {children}
      </main>
    </>
  );
}

const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;
