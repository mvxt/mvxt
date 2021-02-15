import React from 'react';
import Head from "next/head";

// FontAwesome stuff
import { config } from "@fortawesome/fontawesome-svg-core";
import '@fortawesome/fontawesome-svg-core/styles.css';
import "../styles/style.scss";
config.autoAddCss = false;

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
    </Head>
      <Component {...pageProps} />
    </>
  );
};
