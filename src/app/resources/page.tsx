'use client'
import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fuse from 'fuse.js'

import {
  faLink
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faSpotify
} from '@fortawesome/free-brands-svg-icons';

export default function Downloads() {
  const [currentTab, setCurrentTab] = useState('all');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [fuse, setFuse] = useState(null);
  const [search, setSearch] = useState('');

  const inactiveClass = "download-link";
  const activeClasses = "is-active has-text-primary has-text-weight-bold " + inactiveClass;

  const categories = [
    { title: 'All', key: 'all' },
    { title: 'GitHub Repos', key: 'github' },
    { title: 'Spotify Playlists', key: 'spotify' },
    { title: 'Other Links', key: 'link' }
  ];

  const data = [
    {
      name: 'Software Architecture/System Design Interview Prep (by Donne Martin)',
      type: 'github',
      link: 'https://github.com/donnemartin/system-design-primer',
      isFree: true
    },
    {
      name: 'Coding Interview University (by John Washam)',
      type: 'github',
      link: 'https://github.com/jwasham/coding-interview-university',
      isFree: true
    },
    {
      name: 'Public APIs (by Various Contributors)',
      type: 'github',
      link: 'https://github.com/public-apis/public-apis',
      isFree: true
    },
    {
      name: 'The Front-End Checklist (by David Dias)',
      type: 'link',
      link: 'https://frontendchecklist.io/',
      isFree: true
    },
    {
      name: 'Coolors Color Palette Generator (by Fabrizio Bianchi)',
      type: 'link',
      link: 'https://coolors.co/',
      isFree: true
    },
    {
      name: 'Tae Kim\'s Guide to Learning Japanese (Tae Kim)',
      type: 'link',
      link: 'https://guidetojapanese.org/learn/complete/',
      isFree: true
    },
    {
      name: 'Michael\'s Current Top 100 Songs (Spotify)',
      type: 'spotify',
      link: 'https://open.spotify.com/playlist/02ICYKTCGoGNGbnjDJdKiu?si=O5vrydqUS42--DV7UQTqew',
      isFree: true
    },
    {
      name: 'NIGHTMODE // DMCA-FREE Playlist (Nightmode)',
      type: 'spotify',
      link: 'https://open.spotify.com/playlist/3ZJgbUEIeQNyfzNNKjzyRu?si=_qB9vFvPQ9Wk0dBXmle5Zw',
      isFree: true
    }
  ];

  const displayItem = (item) => {
    let icon = null;
    switch (item.type) {
      case 'github':
        icon = faGithub;
        break;
      case 'link':
        icon = faLink;
        break;
      case 'spotify':
        icon = faSpotify;
        break;
    }

    return (
      <a
        className="block px-4 py-2 border-b border-gray-200 w-full rounded-t-lg cursor-pointer no-underline hover:bg-gray-100"
        href={item.link}
        key={item.name}
        target="_blank"
      >
        <FontAwesomeIcon
          icon={icon}
          className='icon spacer'
          size='sm'
        />
        {item.name}
        {item.isFree ? <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded space-left">Free</span> :
          <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-primary text-white rounded space-left">Premium</span>
        }
      </a>
    );
  };

  const tabButton = (category) => {
    return (
      <button
        type="button"
        key={category.key}
        onClick={setActive(category.key)}
        className={(currentTab.toLowerCase() === category.key ? 'bg-primary text-white' : 'hover:bg-gray-100 text-primary') + ' rounded-lg px-6 py-2 border-2 border-primary font-medium text-xs leading-tight focus:outline-none focus:ring-0 transition duration-50 ease-in-out'}
      >
        {category.title}
      </button>
    );
  };

  const filterItems = (e) => {
    if (e.target.value) {
      setItems(fuse.search(e.target.value).map(item => item.item));
    } else {
      getAllItemsForTab();
    }
  };

  const getAllItemsForTab = (currentTab) => {
    if (currentTab === 'all') {
      setItems(data);
    } else {
      setItems(data.filter(item => item.type === currentTab));
    }
  };

  const setActive = (tab) => (e) => {
    e.preventDefault();
    setCurrentTab(tab);
  };

  useEffect(() => {
    setItems(data);
  });

  useEffect(() => {
    const options = {
      keys: ['name']
    };

    setFuse(new Fuse(items, options));
  }, [items]);

  useEffect(() => {
    getAllItemsForTab(currentTab);
  }, [currentTab]);

  return (
    <Fragment>
      <p>
        Here's a directory of free and premium resources. Anything not owned by me is clearly labeled as such.
      </p>
      <p>
        <b>DISCLAIMER:</b> These resources are provided as-is and without any guarantees or warranties. I assume no responsibility or liability for anything that happens should you use these resources.
      </p>
      <div className="flex md:hidden items-center justify-center w-full mb-4">
        <input
          className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none
          "
          type="text"
          onChange={filterItems}
          placeholder="Search items"
        />
      </div>
      <div className="flex items-center justify-center">
        <input
          className="
            hidden
            md:inline
            form-control
            block
            w-full
            px-3
            mr-4
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none
          "
          type="text"
          onChange={filterItems}
          placeholder="Search items"
        />
        <div className="inline-flex" role="group">
          {categories.map(tabButton)}
        </div>
      </div>
      <div className="flex justify-center w-full pt-4">
        <ul className="bg-white rounded-lg border border-gray-200 w-full text-gray-900">
          {items.map(displayItem)}
        </ul>
      </div>
    </Fragment>
  );
};
