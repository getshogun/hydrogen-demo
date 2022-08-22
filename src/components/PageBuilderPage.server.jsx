import { Suspense } from "react";
import { Layout } from "./Layout.server";
import { Page } from "./PageBuilder/PageBuilder.server";

export default function PageBuilderPage() {
  return (
    <Layout>
      <Suspense>
        <Page />
      </Suspense>
    </Layout>
  );
}
