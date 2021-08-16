import Layout from '../components/layout';
import printLinks from '../utils/printLinks';

import {
  faGithub,
  faMediumM,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import {
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';

export default function Coding() {
  let staticVoidAcademyLinks = {
    'sva': {
      icon: faGraduationCap,
      url: 'https://www.staticvoidacademy.com'
    },
    'github': {
      icon: faGithub,
      url: 'https://github.com/Static-Void-Academy'
    },
    'twitter': {
      icon: faTwitter,
      url: 'https://twitter.com/SV_Academy'
    },
    'youtube': {
      icon: faYoutube,
      url: 'https://www.youtube.com/channel/UCD9Vpco6dO5GfYOSmipwlvg'
    },
    'medium': {
      icon: faMediumM,
      url: 'https://medium.com/static-void-academy'
    }
  };

  return (
    <Layout title="Static Void Academy">
      <figure className="image is-16by9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ggr2BSF8bLA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="has-ratio"
        >
        </iframe>
      </figure>
      <br />
      <p>The Static Void Academy is a project I'm working on for software education. I'm experimenting with an idea to make software lessons and concepts more digestible and democratizing the process of teaching. We also upload educational videos to YouTube.</p>
      <p>{printLinks(staticVoidAcademyLinks)}</p>
    </Layout>
  );
};
