import React from 'react';
import Head from "next/head";

import "../styles/style.scss";

export default function Mvxt({ Component, pageProps }) {
  let description = "Michael Vinh Xuan Thanh is a Sr. Sales Engineer, software developer, and musician. Read more about his previous and ongoing projects.";

  return (
    <>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        httpEquiv="X-UA-Compatible"
        content="IE=edge"
      />
      <meta
        name="author"
        content="Michael Vinh Xuan Thanh"
      />
      <meta
        name="description"
        content={description}
      />
      <meta
        name="keywords"
        content="website, namecard, metaorphic, static void academy, vinnythen00b, vinny, software, engineer, developer, musician, guitar, writer, sales"
      />
      <meta
        property="og:site_name"
        content="Michael Vinh Xuan Thanh"
      />
      <meta
        name="og:description"
        content={description}
      />
      <meta
        property="og:url"
        content="https://www.mvxt.me"
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:image"
        content="/img/logo_square.png"
      />
      {/*
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        type="image/gif"
        href="/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="manifest"
        href="/manifest.json"
      />
      */}
    </Head>
      <Component {...pageProps} />
    </>
  );
};
