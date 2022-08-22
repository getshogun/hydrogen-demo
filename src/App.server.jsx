import React from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import {Route, Router, FileRoutes, ShopifyProvider, CartProvider, CacheNone} from '@shopify/hydrogen';
import {Suspense} from 'react';
import PageBuilderPage from "./components/PageBuilderPage.server";

function App() {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        <CartProvider>
          <Router>
            <FileRoutes />
            <Route path="*" page={<PageBuilderPage />} cachingStrategy={CacheNone()} />
          </Router>
        </CartProvider>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
