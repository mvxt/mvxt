import Layout from '../components/layout';
import printLinks from '../utils/printLinks';

import {
  faSteam,
  faTwitch,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

export default function Streaming() {
  let vinnyTheN00bLinks = {
    'twitch': {
      icon: faTwitch,
      url: 'https://twitch.tv/vinnythen00b'
    },
    'youtube': {
      icon: faYoutube,
      url: 'https://www.youtube.com/channel/UCDzHJd_n5L2WboDeNs2_uNQ'
    },
    'steam': {
      icon: faSteam,
      url: 'https://steamcommunity.com/id/vinnythen00b/'
    }
  };

  return (
    <Layout title="VinnyTheN00b">
      <figure className="image is-16by9">
        <iframe
          src="https://player.twitch.tv/?channel=vinnythen00b&parent=www.mvxt.me&muted=true"
          height="360"
          width="640"
          allowFullScreen={true}
          className="has-ratio"
        >
        </iframe>
      </figure>
      <br />
      <p>I stream various activities from games, to music production/performance, to coding on a weekly basis, and I upload the videos <a href="https://www.youtube.com/channel/UCDzHJd_n5L2WboDeNs2_uNQ">to YouTube</a>. Come join me on a stream - it's a lot of fun, and I would love your support!</p>
      <p>Alternatively, I'm always looking for more people to play games with. I will play almost any game. Friend me on Steam or reach out to me on Discord! Discord user is <code>VinnyTheN00b#7351</code></p>
      <p>{printLinks(vinnyTheN00bLinks)}</p>
    </Layout>
  );
};
