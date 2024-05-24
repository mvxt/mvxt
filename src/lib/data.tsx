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

import printLinks from '@/lib/printLinks';

const staticVoidAcademyLinks = {
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
}


export const projects = {
  sva: {
    title: 'Static Void Academy',
    subtitle: 'Online Code Academy',
    thumb: '/img/sva-square.png',
    status: 1,
    content: (
      <>
        <figure className="w-full pt-1 mb-2">
          <iframe
            width="720"
            height="405"
            src="https://www.youtube.com/embed/Ggr2BSF8bLA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            className="w-full"
          >
          </iframe>
        </figure>
        <p>The Static Void Academy was a project around software education. I built an application and started a YouTube channel covering various aspects of software development aimed at beginners.</p>
        <p>This project has largely stalled and I am not considering revisiting this in the near future.</p>
        <p className="text-gray-600">{printLinks(staticVoidAcademyLinks)}</p>
      </>
    ),
    visit: 'https://www.staticvoidacademy.com'
  },
  mm: {
    title: 'Music Mesh',
    subtitle: 'Visual Music Grid',
    thumb: '/img/mm-square.png',
    status: 0,
    content: (
      <>
        <p><picture><img src="/img/mm-long.gif" alt="Music Mesh" className="w-full text-center" /></picture></p>
        <p>{"A couple decades ago, there was a Flash application called Otomata by Batuhan Bozkurt (a.k.a. Earslap). It's basically a grid with moving arrows that played notes when they hit the edges."}</p>
        <p>That project substantially influenced me getting into music production; I would construct elaborate grids on Otomata and use the resulting melodies as composition inspiration.</p>
        <p>Since then, the project has largely gone unmaintained. I partnered together with a friend to reconstruct the same idea, but accessible via JavaScript and the browser (as opposed to Flash).</p>
      </>
    ),
    visit: 'https://www.musicmesh.app/'
  },
  medium: {
    title: 'Medium',
    subtitle: 'Blogging, Writing',
    thumb: '/img/medium-square.png',
    status: 0,
    content: (
      <>
        <p className="image"><picture><img src="/img/medium-long.jpg" alt="Medium Profile" /></picture></p>
        <p>{"I used to write periodically on Medium about a variety of topics, and I've contributed to several different publications like "}<a href="https://medium.com/better-programming">Better Programming</a>, <a href="https://medium.com/swlh">The Startup</a>, <a href="https://medium.com/mind-cafe">Mind Cafe</a>, and <a href="https://psiloveyou.xyz/">P.S. I Love You</a>{", among others. I've also been featured at one point as a Top Writer in Technology, Productivity, and Self Improvement."}</p>
        <p>{"I haven't contributed consistently for the past couple of years but may return to writing at some point."}</p>
      </>
    ),
    visit: 'https://blog.mvxt.me'
  },
  aotm: {
    title: 'App of the Month',
    subtitle: 'Monthly App Reviews',
    thumb: '/img/aotm-square.png',
    status: 1,
    content: (
      <>
        <p className="image"><picture><img src="/img/aotm-long.png" alt="App of the Month" /></picture></p>
        <p>App of the Month was a monthly newsletter reviewing the best productivity and self-improvement apps for others looking to improve their lives. Years of experimenting and trying out different tools has given me a wealth of information about them.</p>
        <p>{"I've not contributed any new articles or posts in a while but am considering revisiting this in the future. You can subscribe below or by visiting the project. I don't spam or resell email addresses."}</p>
        <iframe src="https://monthlyapp.substack.com/embed" width="480" height="320" style={{ border:"1px solid #EEE", background:"white", frameborder: 0, scrolling:"no", margin: "0 auto", display: "block" }}></iframe>
      </>
    ),
    visit: 'https://monthlyapp.substack.com/'
  },
  noun: {
    title: 'The Noun Project',
    subtitle: 'Icon Design',
    thumb: '/img/noun-project-square.jpg',
    status: 1,
    content: (
      <>
        <p>
          <video
            width="640"
            height="360"
            src="/img/noun-project-long.mp4"
            type="video/mp4"
            alt="The Noun Project"
            autoPlay
            loop
            muted
            className="w-full"
          />
        </p>
        <p>For side projects, I do a lot of work with Adobe Photoshop, Adobe Illustrator, and Adobe Premiere. For a while, I created miscellaneous icons to improve my skill with Illustrator for vector graphics.</p>
        <p>Most of my portfolio is on a website called <a href="https://thenounproject.com/creator/mvxt/">The Noun Project</a>, and my icons are mostly focused on games as a theme.</p>
      </>
    ),
    visit: 'https://thenounproject.com/mvxt/'
  },
  muser: {
    title: 'Muser',
    subtitle: 'UI/UX Design',
    thumb: '/img/muser-square.png',
    status: 2,
    content: (
      <>
        <p><picture><img src="/img/muser-long.jpg" alt="The Muser Project" className="w-full" /></picture></p>
        <p>A while back, I took an online UI/UX course and completed the course with Springboard UX. The ultimate goal of the course was to take us through the UX journey and the various aspects of user experience design.</p>
        <p>Our final project was assembling each component of the course into one long report, and this was a complete UX report for a hypothetical product I was designing. I used a few programs for wireframing and prototyping, most notably Balsamiq and Figma.</p>
        <p>{"My project was titled 'Muser', and it was a hypothetical new journaling app I proposed for this course."}</p>
      </>
    ),
    visit: 'https://indd.adobe.com/view/f2d39da8-6842-455f-a857-b3ad57be18db'
  }
};

