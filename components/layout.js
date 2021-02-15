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
    <div id="app" className="columns is-gapless-mobile">
      <div className="column is-full-mobile is-three-fifths-desktop is-offset-one-fifth-desktop">
        <div id="wrapper" className="container">
          <div className="columns">
            <div className="column auto">
              <Header/>
              <Navbar/>
              <article className="article">
                <h1 className="is-size-3 has-text-centered">
                  {title}
                </h1>
                <section className="section">
                  {children}
                </section>
              </article>
            </div>
          </div>
          </div>
        <Footer/>
      </div>
    </div>
    </>
  );
}
