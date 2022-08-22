import { Suspense } from "react";
import { Layout } from "../components/Layout.server";
import { Page } from "../components/PageBuilder/PageBuilder.server";

export default function Home() {
  return (
    <Layout>
      <Suspense>
        <Page path="/" />
      </Suspense>
    </Layout>
  );
}
