'use client'
import { Fragment, useEffect, useState } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

import type { Metadata } from 'next';

import printLinks from '@/lib/printLinks';

import {
  faBandcamp,
  faFacebook,
  faSoundcloud,
  faSpotify,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import {
  faMusic,
  faStar
} from '@fortawesome/free-solid-svg-icons';

export default function Music() {
  let [loading, setLoading] = useState(true);

  const heartbeatLinks = {
    'apple music': {
      icon: faMusic,
      url: 'https://music.apple.com/us/artist/heartbeat-retrospective/1617771105'
    },
    'spotify': {
      icon: faSpotify,
      url: 'https://open.spotify.com/artist/2OZ6CBLUupZ4s25l5P8Jt2?si=GEz2kcodTluea4FMz6Cybw&nd=1'
    },
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
      url: 'https://music.youtube.com/playlist?list=OLAK5uy_l5palaI9yK4sUWJOalprQ8vlttdUM66CQ'
    }
  };

  useEffect(() => {
    setLoading(false);
  });

  return (
    <Fragment>
      <p>Alongside symphonic and marching bands, I played in a separate amateur band with some friends in high school. I took charge of production and editing, and we had the opportunity to perform live at shows and venues like <a href="https://www.thorntonco.gov/festivals-events/Pages/thorntonfest.aspx">Thorntonfest</a>, <a href="https://www.broomfieldenterprise.com/2016/02/15/broomstock-music-event-ending-after-15-years/">Broomstock</a>, and <a href="https://www.theorientaltheater.com/">The Oriental Theater</a>.</p>
      <p>My more experimental music is under a solo project <a href="https://soundcloud.com/vinnythen00b">VinnyTheN00b</a> while I make slightly more mainstream music with a friend under Heartbeat Retrospective.</p>
      <p className="text-gray-600 text-center">{printLinks(heartbeatLinks)}</p>
      <br />
      <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        frameBorder="0"
        height="450"
        style={{ width: "100%", overflow: "hidden", background: "transparent" }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/us/album/heart-ep/1618007179">
      </iframe>
      <br />
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/artist/2OZ6CBLUupZ4s25l5P8Jt2?utm_source=generator"
        width="100%"
        height="250"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
      </iframe>
    </Fragment>
  );
};

