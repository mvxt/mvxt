import React from 'react';
import Layout from '../components/layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  /**
   * Returns rendering of FontAwesome dictionaries of links
   * @param {object} links 
   */
  const printLinks = (links) => {
    return Object.keys(links).map(function(key) {
      return (
        <a
          key={key}
          className="footer-social"
          href={links[key].url}
        >
          <FontAwesomeIcon icon={links[key].icon} size='lg' />
        </a>
      );
    })
  }

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
    <Layout title="Ongoing Projects">
      <div className="tile is-ancestor">
        <div className="tile is-parent is-3">
          <a className="tile is-child box" data-modal="vinnythen00b">
            <h2 className="title is-size-5">VinnyTheN00b</h2>
            <h3 className="subtitle is-size-6">Coding, Music, Games</h3>
            <div className="content">
              <div className="image is-square">
                <img src="/img/vinnythen00b-square.png" alt="VinnyTheN00b Square" />
              </div>
            </div>
          </a>
        </div>
        <div className="tile is-parent is-3">
          <a className="tile is-child box" data-modal="sva">
            <h2 className="title is-size-5">Static Void Academy</h2>
            <h3 className="subtitle is-size-6">Online Code Academy</h3>
            <div className="content">
              <div className="image is-square">
                <img src="/img/sva-square.png" alt="The Static Void Academy Square" />
              </div>
            </div>
          </a>
        </div>
        <div className="tile is-parent is-3">
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
        <div className="tile is-parent is-3">
          <a className="tile is-child box" data-modal="medium">
            <h2 className="title is-size-5">Medium</h2>
            <h3 className="subtitle is-size-6">Writing & Blogging</h3>
            <div className="content">
              <div className="image is-square">
                <img src="/img/medium-square.png" alt="Medium Logo Square" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-3">
          <a className="tile is-child box" data-modal="heartbeat">
            <h2 className="title is-size-5">Heartbeat Retro</h2>
            <h3 className="subtitle is-size-6">Collab Music Project</h3>
            <div className="content">
              <div className="image is-square">
                <img src="/img/heartbeat-square.jpg" alt="Heartbeat Retrospective Square" />
              </div>
            </div>
          </a>
        </div>
        <div className="tile is-parent is-3">
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
        <div className="tile is-parent is-3">
          <a className="tile is-child box" data-modal="yggneous">
            <h2 className="title is-size-5">Yggneous</h2>
            <h3 className="subtitle is-size-6">Solo Music Project</h3>
            <div className="content">
              <div className="image is-square">
                <img src="/img/yggneous-square.jpg" alt="Yggneous Square" />
              </div>
            </div>
          </a>
        </div>
        <div className="tile is-parent is-3">
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
      <div id="vinnythen00b" className="modal">
        <div className="modal-background"></div>
        <div className="modal-card box">
          <section className="modal-card-body">
            <h2 className="title">VinnyTheN00b</h2>
            <h3 className="subtitle">Game, Music, and Code Stream</h3>
            <hr />
            <p className="image"><img src="/img/vinnythen00b-long.gif" alt="VinnyTheN00b" /></p>
            <p>I recently started streaming on Twitch. I do various things from gaming, to music-making, to coding, and I upload the videos <a href="https://www.youtube.com/channel/UCDzHJd_n5L2WboDeNs2_uNQ">to YouTube</a>. Come join me on a stream - would love your support!</p>
            <p>Alternatively, I'm always looking for more people to play games with. I will play almost any game. Friend me on Steam or reach out to me on Discord! Discord user is <code>VinnyTheN00b#7351</code></p>
            <p>{printLinks(vinnyTheN00bLinks)}</p>
            <hr />
            <button className="close button">Close</button>
          </section>
        </div>
      </div>

      <div id="sva" className="modal">
        <div className="modal-background"></div>
        <div className="modal-card box">
          <section className="modal-card-body">
            <h2 className="title">Static Void Academy</h2>
            <h3 className="subtitle">Online Software Academy</h3>
            <hr/>
            <p className="image"><img src="/img/sva-long.png" alt="The Static Void Academy" /></p>
            <p>The Static Void Academy is a project I'm working on for software education. Rather than individual, siloed courses teaching specific concepts, the Academy takes a holistic approach to teaching the foundations and fundamentals.</p>
            <p>SVA is split into two distinct "sections": Core and Path. Core modules consist of the fundamentals and basics that all software engineers should know. Path modules cover domain-specific knowledge for an industry or area of the tech stack.</p>
            <p>For more information, visit the <a href="https://www.staticvoidacademy.com">main website</a>.</p>
            <p>{printLinks(staticVoidAcademyLinks)}</p>
            <hr/>
            <button className="close button">Close</button>
          </section>
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

      <div id="medium" className="modal">
        <div className="modal-background"></div>
        <div className="modal-card box">
          <section className="modal-card-body">
            <h2 className="title">Medium</h2>
            <h3 className="subtitle">General Writing</h3>
            <hr/>
            <p className="image"><img src="/img/medium-long.jpg" alt="Medium Profile" /></p>
            <p>I write periodically on Medium about a variety of topics. I've contributed to a couple different publications like <a href="https://medium.com/better-programming">Better Programming</a>, <a href="https://medium.com/swlh">The Startup</a>, and <a href="https://medium.com/mind-cafe">Mind Cafe</a>. I've also been featured as a Top Writer in Technology, Productivity, and Self Improvement.</p>
            <p>The views expressed on these articles are my own, and they do not represent the views of any organizations or employers I am, have been, or will be a part of.</p>
            <p><a href="https://medium.com/@michael.thanh">Visit my profile here</a>.</p>
            <hr/>
            <button className="close button">Close</button>
          </section>
        </div>
      </div>

      <div id="yggneous" className="modal">
        <div className="modal-background"></div>
        <div className="modal-card box">
          <section className="modal-card-body">
            <h2 className="title">Yggneous</h2>
            <h3 className="subtitle">Solo Music Project</h3>
            <hr/>
            <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/782653507&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <p>When I was young, I was always interested in music. In middle school and high school, I joined the symphonic and marching bands, and there I nurtured my love for music.</p>
            <p>Ultimately, I ended up graduating and working in tech. However, now and then I like to appease my musical urges by composing and producing pieces for fun.</p>
            <p>Visit the <a href="https://soundcloud.com/yggneous">SoundCloud profile</a></p>
            <hr/>
            <button className="close button">Close</button>
          </section>
        </div>
      </div>

      <div id="heartbeat" className="modal">
        <div className="modal-background"></div>
        <div className="modal-card box">
          <section className="modal-card-body">
            <h2 className="title">Heartbeat Retrospective</h2>
            <h3 className="subtitle">Collab Music Project</h3>
            <hr/>
            <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/746874703&color=%23583e36&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <p>Alongside symphonic and marching bands, I played in a separate amateur band with some friends in high school. I took charge of production and editing, and we had the opportunity to perform live at shows and venues like <a href="https://www.thorntonco.gov/festivals-events/Pages/thorntonfest.aspx">Thorntonfest</a>, <a href="https://www.broomfieldenterprise.com/2016/02/15/broomstock-music-event-ending-after-15-years/">Broomstock</a>, and <a href="https://www.theorientaltheater.com/">The Oriental Theater</a>.</p>
            <p>Two of us have moved on to continue making music together occasionally. This is our project. Our links:</p>
            <p>{printLinks(heartbeatLinks)}</p>
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
