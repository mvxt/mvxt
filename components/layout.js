import Head from 'next/head';

import Header from './header';
import Footer from './footer';
import Navbar from './navbar';

export default function Layout({ children, ...props }) {
  const { tabTitle, title } = props;

  return (
    <>
    <Head>
      <title>{tabTitle ? tabTitle : title} - Michael Vinh Xuan Thanh</title>
    </Head>
    <div id="app" className="grid grid-cols-1 bg-white">
      <div id="wrapper" className="px-8">
        <div className="columns">
          <div className="column auto">
            <Header/>
            <Navbar/>
            <article className="article">
              <h1 className="is-size-3 has-text-centered">
                {title}
              </h1>
              <section className="section is-size-6">
                {children}
              </section>
            </article>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
}
