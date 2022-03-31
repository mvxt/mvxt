import Head from 'next/head';

import Footer from './footer';
import Header from './header';
import Navbar from './navbar';

export default function Layout({ children, ...props }) {
  const { tabTitle, title } = props;

  return (
    <>
    <Head>
      <title>{tabTitle ? tabTitle : title} - Michael Vinh Xuan Thanh</title>
    </Head>
    <div className="columns-1">
      <Header title={title} />
      <Navbar title={title} />
      <div className="max-w-3xl px-8 mx-auto">
        <article className="article">
          <section className="">
            {children}
          </section>
        </article>
      </div>
      <Footer/>
    </div>
    </>
  );
}
