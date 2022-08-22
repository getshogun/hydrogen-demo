import {fetchSync, useShop, useUrl, CacheCustom} from '@shopify/hydrogen';
import PageBuilderProvider from './PageBuilderProvider.client';

const API_URL = 'https://hydrogen.getshogun.com';
const defaultCachingStrategy = CacheCustom({
  mode: 'must-revalidate',
  staleWhileRevalidate: 10,
  maxAge: 60,
});

export function Page({path, cachingStrategy}) {
  const {storeDomain} = useShop();
  const {pathname} = useUrl();

  path = path ? path : pathname;
  const response = fetchSync(
    `${API_URL}/shopify/hydrogen/page?site_url=${storeDomain}&path=${path}`, {
      cache: cachingStrategy ? cachingStrategy : defaultCachingStrategy 
    }
  );

  return (
    <PageBuilderProvider>
      <div dangerouslySetInnerHTML={{__html: response.text()}} />
    </PageBuilderProvider>
  );
}

export function Section({name, cachingStrategy}) {
  const {storeDomain} = useShop();
  const response = fetchSync(
    `${API_URL}/shopify/hydrogen/section?site_url=${storeDomain}&name=${name}`, {
      cache: cachingStrategy ? cachingStrategy : defaultCachingStrategy
    }
  );

  return (
    <PageBuilderProvider>
      <div dangerouslySetInnerHTML={{__html: response.text()}} />
    </PageBuilderProvider>
  );
}
