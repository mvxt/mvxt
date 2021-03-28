import Layout from '../components/layout';
import printLinks from '../utils/printLinks';

import {
  faBandcamp,
  faFacebook,
  faSoundcloud,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faStar
} from '@fortawesome/free-solid-svg-icons';

export default function Music() {
  let heartbeatLinks = {
    'soundcloud': {
      icon: faSoundcloud,
      url: 'https://soundcloud.com/heartbeat-retro'
    },
    'facebook': {
      icon: faFacebook,
      url: 'https://www.facebook.com/heartbeat.retro'
    },
    'bandcamp': {
      icon: faBandcamp,
      url: 'https://heartbeat-retro.bandcamp.com/'
    },
    'reverbnation': {
      icon: faStar,
      url: 'https://www.reverbnation.com/heartbeat_retro'
    },
    'youtube': {
      icon: faYoutube,
      url: 'https://www.youtube.com/channel/UCjaVYkoqMOANGAONj_L4ZuA'
    }
  };

  return (
    <Layout title="Music">
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/746874703&color=%23583e36&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
      </iframe>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/782653507&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
      </iframe>
      <br />
      <p>Alongside symphonic and marching bands, I played in a separate amateur band with some friends in high school. I took charge of production and editing, and we had the opportunity to perform live at shows and venues like <a href="https://www.thorntonco.gov/festivals-events/Pages/thorntonfest.aspx">Thorntonfest</a>, <a href="https://www.broomfieldenterprise.com/2016/02/15/broomstock-music-event-ending-after-15-years/">Broomstock</a>, and <a href="https://www.theorientaltheater.com/">The Oriental Theater</a>.</p>
      <p>My more experimental music is under a solo project called <a href="https://soundcloud.com/yggneous">Yggneous</a> (pronounced like the rock), while I make slightly more mainstream music with a friend under <a href="https://soundcloud.com/heartbeat-retro">Heartbeat Retrospective</a>. We'll be releasing an album soon, stay tuned!</p>
      <p>{printLinks(heartbeatLinks)}</p>
    </Layout>
  );
};
