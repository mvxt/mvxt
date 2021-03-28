import React from 'react';
import Layout from '../components/layout';
import printLinks from '../utils/printLinks';

import {
  faBandcamp,
  faFacebook,
  faGithub,
  faMediumM,
  faSoundcloud,
  faSteam,
  faTwitch,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faGraduationCap,
  faStar
} from '@fortawesome/free-solid-svg-icons';

export default function Index() {
  const handleClickModal = event => {
    let m = document.getElementById(event.currentTarget.dataset.modal.toString());
    let html = document.querySelector('html');
    m.classList.add('is-active');
    html.classList.add('is-clipped');

    let close = m.querySelectorAll('div.modal-background, button.close');
    close.forEach(c => {
      c.addEventListener('click', () => {
        m.classList.remove('is-active');
        html.classList.remove('is-clipped');
      });
    });
  };

  React.useEffect(() => {
    document.querySelectorAll('a.tile').forEach(t => {
      t.addEventListener('click', handleClickModal);
    });

    return () => {
      document.querySelectorAll('.tile').forEach(t => {
        t.removeEventListener("click", handleClickModal);
      });
    };
  }, [])

  return (
    <Layout tabTitle="Other Projects" title="Other Projects">
      <div className="tile is-ancestor">
        <div className="tile is-parent is-4">
          <a className="tile is-child box" data-modal="aotm">
            <h2 className="title is-size-5">App of the Month</h2>
            <h3 className="subtitle is-size-6">Monthly App Reviews</h3>
            <div className="content">
              <div className="image is-square">
                <img src="/img/aotm-square.png" alt="App of the Month Square" />
              </div>
            </div>
          </a>
        </div>
        <div className="tile is-parent is-4">
          <a className="tile is-child box" data-modal="noun-project">
            <h2 className="title is-size-5">The Noun Project</h2>
            <h3 className="subtitle is-size-6">Icon Design</h3>
            <div className="content">
              <div className="image is-square">
                <img src="/img/noun-project-square.jpg" alt="The Noun Project Square" />
              </div>
            </div>
          </a>
        </div>
        <div className="tile is-parent is-4">
          <a className="tile is-child box" data-modal="muser">
            <h2 className="title is-size-5">Muser</h2>
            <h3 className="subtitle is-size-6">UI/UX Project</h3>
            <div className="content">
              <div className="image is-square">
                <img src="/img/muser-square.png" alt="Muser Square" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div id="aotm" className="modal">
        <div className="modal-background"></div>
        <div className="modal-card box">
          <section className="modal-card-body">
            <h2 className="title">App of the Month</h2>
            <h3 className="subtitle">Curated, Monthly App Review Newsletter</h3>
            <hr/>
            <p className="image"><img src="/img/aotm-long.png" alt="App of the Month" /></p>
            <p>App of the Month is a monthly newsletter reviewing the best productivity and self-improvement apps for others looking to improve their lives.</p>
            <p>Years of experimenting and trying out different tools has given me a wealth of information about them.</p>
            <p><a href="https://monthlyapp.substack.com/">Check out</a> the newsletter, or <a href="http://bit.ly/monthlyappsub">subscribe today</a>. I don't spam or share email addresses.</p>
            <hr/>
            <button className="close button">Close</button>
          </section>
        </div>
      </div>

      <div id="noun-project" className="modal">
        <div className="modal-background"></div>
        <div className="modal-card box">
          <section className="modal-card-body">
            <h2 className="title">The Noun Project</h2>
            <h3 className="subtitle">Icon Design</h3>
            <hr/>
            <video width="640" height="360" src="/img/noun-project-long.mp4" type="video/mp4" alt="The Noun Project" autoPlay loop muted></video>
            <p>I like experimenting and improving my skills on various different applications. Although I have no formal graphic design training, I do dabble with various Adobe products. Photoshop and Premiere are required for video and photo editing on the above projects. Another occasional side project is icon design using Adobe Illustrator.</p>
            <p>I've primarily focused my portfolio on a website called <a href="https://thenounproject.com/">The Noun Project</a>, and my icons are mostly focused on game icons.</p>
            <p>Visit my <a href="https://thenounproject.com/orpheus_studios/">Noun Project profile</a>.</p>
            <hr/>
            <button className="close button">Close</button>
          </section>
        </div>
      </div>

      <div id="muser" className="modal">
        <div className="modal-background"></div>
        <div className="modal-card box">
          <section className="modal-card-body">
            <h2 className="title">The Muser Project</h2>
            <h3 className="subtitle">UI/UX Project</h3>
            <hr/>
            <a href="https://indd.adobe.com/view/f2d39da8-6842-455f-a857-b3ad57be18db">
              <p className="image"><img src="/img/muser-long.jpg" alt="The Muser Project" /></p>
            </a>
            <p>A while back, I took an online UI/UX course and completed the course with Springboard UX. The ultimate goal of the course was to take us through the UX journey and the various aspects of user experience design.</p>
            <p>Our final project was assembling each component of the course into one long report, and this was a complete UX report for a hypothetical product I was designing. I used a few programs for wireframing and prototyping, most notably Balsamiq and Figma.</p>
            <p>My project was titled "Muser", and it was a hypothetical new journaling app I proposed for this course.</p>
            <p>See the <a href="https://indd.adobe.com/view/f2d39da8-6842-455f-a857-b3ad57be18db">full report here</a>.</p>
            <hr/>
            <button className="close button">Close</button>
          </section>
        </div>
      </div>
    </Layout>
  )
}
