import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faMediumM } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  let profiles = {
    'twitch': {
      icon: faTwitch,
      url: 'https://www.twitch.tv/vinnythen00b'
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
    'twitter': {
      icon: faTwitter,
      url: 'https://twitter.com/vinnythen00b'
    },
    'instagram': {
      icon: faInstagram,
      url: 'https://www.instagram.com/vinnythen00b/'
    }
  };

  return (
    <footer class="custom-footer has-text-centered is-size-6">
      <div>
        {Object.keys(profiles).map(function(key) {
          return (
            <a key={key} class="footer-social" href={profiles[key].url}>
              <FontAwesomeIcon icon={profiles[key].icon} />
            </a>
          );
        })}
      </div>
      Copyright &copy; {new Date().getFullYear()} Michael Vinh Xuan Thanh. Site built with <a href="https://nextjs.org/">Next.js</a> and <a href="https://bulma.io/">Bulma</a>.
    </footer>
  );
}
