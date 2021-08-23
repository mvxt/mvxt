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
    'twitch': {
      icon: faTwitch,
      url: 'https://www.twitch.tv/vinnythen00b'
    },
    'twitter': {
      icon: faTwitter,
      url: 'https://twitter.com/vinnythen00b'
    },
    'medium': {
      icon: faMediumM,
      url: 'https://medium.com/@michael-thanh'
    },
    'github': {
      icon: faGithub,
      url: 'https://github.com/mvxt'
    },
    'linkedin': {
      icon: faLinkedinIn,
      url: 'https://www.linkedin.com/in/michaelthanh/',
    },
    'instagram': {
      icon: faInstagram,
      url: 'https://www.instagram.com/vinnythen00b/'
    }
  };

  return (
    <footer className="custom-footer is-size-6">
      <hr/>
      <div className="has-text-centered footer-icons">
        {Object.keys(profiles).map(function(key) {
          return (
            <a key={key} className="footer-social" href={profiles[key].url}>
              <FontAwesomeIcon icon={profiles[key].icon} size='lg' />
            </a>
          );
        })}
      </div>
      <div className="container columns is-centered">
        <div className="column is-4">
          <b>Miscellaneous</b>
          <ul>
            <li><a href="https://blog.mvxt.me/" target="_blank">Blog</a></li>
            <li><a href="/cv">CV</a></li>
            <li><a href="/ethos">Ethos</a></li>
          </ul>
        </div>
        <div className="column is-2">
          <b>Services</b>
          <ul>
            <li><a href="/hire">Hire Me</a></li>
          </ul>
        </div>
      </div>
      <div className="has-text-centered">
        Copyright &copy; {new Date().getFullYear()} Michael Vinh Xuan Thanh.
        Site built with <a href="https://nextjs.org/">Next.js</a>, <a href="https://bulma.io/">Bulma</a>, <a href="https://aws.amazon.com/s3/">S3</a>, and <a href="https://supabase.io/">Supabase</a>.
      </div>
    </footer>
  );
}
