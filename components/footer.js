import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faMediumM } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export default function Footer() {
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
    <footer className="mt-8 mb-8 text-center text-gray-600">
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
  );
}
