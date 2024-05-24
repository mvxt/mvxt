import { Fragment } from 'react';

import type { Metadata } from "next";
import Head from 'next/head';

export const metadata: Metadata = {
  title: "404 - Michael Vinh Xuan Thanh",
  description: "Michael Vinh Xuan Thanh is a Lead Sales Engineer, software developer, and musician. Read more about his previous and ongoing projects."
};

export default function Home() {
  return (
    <Fragment>
      <p><b>404 Not Found</b></p>
      <p>{"The page you're looking for doesn't exist. If this is a mistake, please reach out and let me know."}</p>
    </Fragment>
  );
}
