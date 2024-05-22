'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faMediumM } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Template({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
}>) {

  let profiles = {
    'medium': {
      icon: faMediumM,
      url: 'https://medium.com/@michael-thanh'
    },
    'linkedin': {
      icon: faLinkedinIn,
      url: 'https://www.linkedin.com/in/michaelthanh/',
    },
    'github': {
      icon: faGithub,
      url: 'https://github.com/mvxt'
    },
    'instagram': {
      icon: faInstagram,
      url: 'https://www.instagram.com/vinnythen00b/'
    },
    'x': {
      icon: faTwitter,
      url: 'https://x.com/vinnythen00b'
    }
  };

  return (
    <div className="columns-1">
      <div className="hidden sm:block max-w-3xl px-8 pt-4 mx-auto">
        <h1 className="text-4xl font-serif text-center">TITLE</h1>
      </div>
      <div className="max-w-3xl px-8 mx-auto">
        <article className="article">
          <section className="">
            {children}
          </section>
        </article>
      </div>
      <footer className="mt-8 mb-8 text-center text-gray-600custom-footer">
        <p className="max-w-3xl px-8 py-4 mx-auto border-t border-gray-200">
          {Object.keys(profiles).map(function(key) {
            return (
              <a key={key} className="footer-social hover:text-primary" href={profiles[key].url}>
                <FontAwesomeIcon icon={profiles[key].icon} size='lg' />
              </a>
            );
          })}
        </p>
        <p className="max-w-3xl px-8 mx-auto mt-2">
          Copyright &copy; {new Date().getFullYear()} Michael Vinh Xuan Thanh.
        </p>
        <p className="max-w-3xl px-8 mx-auto">
          Site built with <a href="https://nextjs.org/">Next.js</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a>. Deployed on <a href="https://www.digitalocean.com/">DigitalOcean</a>.
        </p>
      </footer>
    </div>
  );
}
