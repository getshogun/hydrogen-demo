import {fetchSync} from '@shopify/hydrogen';
import {useShop, useUrl} from '@shopify/hydrogen';
import PageBuilderProvider from './PageBuilderProvider.client';

// const API_URL = 'https://athena-staging.shogun.dev';
const API_URL = 'https://shogun.dev:3000';

export function Page({path}) {
  const {storeDomain} = useShop();
  const {pathname} = useUrl();

  path = path ? path : pathname;
  const response = fetchSync(
    `${API_URL}/shopify/hydrogen/page?site_url=${storeDomain}&path=${path}`,
  );

  return (
    <PageBuilderProvider>
      <div dangerouslySetInnerHTML={{__html: response.text()}} />
    </PageBuilderProvider>
  );
}

export function Section({name}) {
  const {storeDomain} = useShop();
  const response = fetchSync(
    `${API_URL}/shopify/hydrogen/section?site_url=${storeDomain}&name=${name}`,
  );

  return (
    <PageBuilderProvider>
      <div dangerouslySetInnerHTML={{__html: response.text()}} />
    </PageBuilderProvider>
  );
}
