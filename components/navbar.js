import React from 'react';

export default function Navbar() {
  const [burger, setBurger] = React.useState(false);

  let navigation = {
    Home: '/',
    CV: '/cv',
    Ethos: '/ethos',
    About: '/about'
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          role="button"
          className={"navbar-burger burger " + (burger ? 'is-active' : '')}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarItems"
          onClick={() => setBurger(!burger)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarItems" className="navbar-menu">
        <div className="navbar-start">
          {Object.keys(navigation).map(key => {
            return (
              <a
                key={key}
                className="navbar-item"
                href={navigation[key]}
              >
                {key}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}