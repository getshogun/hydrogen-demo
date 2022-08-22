# PageBuilder + Hydrogen - headless drag-and-drop visual builder
This respository provides a reference implementation using [PageBuilder](https://getshogun.com/page-builder) for drag-and-drop page building with [Shopify Hydrogen](https://hydrogen.shopify.dev/).
## Getting Started
* Clone this project `git clone https://github.com/getshogun/hydrogen-poc`
* Install dependencies `yarn`
* Update `hydrogen.config.js` with your store's `storeDomain` and `storefrontToken`.
* Start the local server `yarn dev`.
* Create an account a [PageBuilder](https://getshogun.com/page-builder) account.
* Create a new page within page builder with path `/testing` using the drag-and-drop editor.
* Click `Publish` within PageBuilder.
* Visit `http://localhost:3000/testing`


## Usage

### Add CartProvider
In order for PageBuilder product boxes and collection compents to properly add items to the cart you must ensure your App is wrapped with a CartProvider component

###### src/App.server.jsx

```javascript
import React from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import {Router, FileRoutes, ShopifyProvider, CartProvider} from '@shopify/hydrogen';
import {Suspense} from 'react';

function App() {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        {/* CartProvider must be a decendant of ShopifyProvider */}
        <CartProvider>
          <Router>
            <FileRoutes />
          </Router>
        </CartProvider>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);

```


###  Displaying a PageBuilder Page

###### src/routes/index.server.jsx
```javascript
import { Suspense } from "react";
import { Layout } from "../components/Layout.server";
import { Page } from "../components/PageBuilder/PageBuilder.server";

export default function Home() {
  return (
    // wrap a PageBuilder Page component with your own layout / navigation elements
    <Layout>
      <Suspense>
        <Page />
      </Suspense>
    </Layout>
  );
}
```

By default the component will assume the path within the route matches a PageBuilder page. Example the above assumes PageBuilder has an existing page with the `/` path.

If you wish to override this path you can specify it as a property on the component.

###### src/routes/index.server.jsx
```javascript
import { Suspense } from "react";
import { Layout } from "../components/Layout.server";
import { Page } from "../components/PageBuilder/PageBuilder.server";

export default function Home() {
  return (
    // wrap a PageBuilder Page component with your own layout / navigation elements
    <Layout>
      <Suspense>
        <Page path="/welcome" />
      </Suspense>
    </Layout>
  );
}
```


## Displaying a PageBuilder Section
###### src/routes/index.server.jsx
```javascript
import { Suspense } from "react";
import { Layout } from "../components/Layout.server";
import { Section } from "../components/PageBuilder/PageBuilder.server";

export default function Home() {
  return (
    <Layout>
      <Suspense>
        <Section name="hero" />
      </Suspense>
    </Layout>
  );
}
```


## Building for production

```bash
yarn build
```

## Previewing a production build

To run a local preview of your Hydrogen app in an environment similar to Oxygen, build your Hydrogen app and then run `yarn preview`:

```bash
yarn build
yarn preview
```
