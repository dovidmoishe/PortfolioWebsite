import Layout from "@/components/Shared/Layout";
import "@/styles/globals.css";
import { NextSeo } from "next-seo";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo 
        title="Thekideveloper - David Baiye Ayomide"
        description="Portfolio website of the young software engineer "
      />
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
