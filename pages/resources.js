import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fuse from 'fuse.js'

import {
  faExclamationTriangle,
  faFilePdf,
  faFilePowerpoint,
  faFileWord,
  faLink,
  faSearch,
  faVolumeUp
} from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';
import Loader from '../components/loader';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUB_API_KEY
);

export default function Downloads() {
  const [currentTab, setCurrentTab] = useState('all');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allItems, setAllItems] = useState([]);
  const [items, setItems] = useState([]);
  const [fuse, setFuse] = useState(null);
  const [search, setSearch] = useState('');

  const inactiveClass = "download-link";
  const activeClasses = "is-active has-text-primary has-text-weight-bold " + inactiveClass;

  const categories = [
    { title: 'All', key: 'all' },
    { title: 'Word Docs', key: 'word' },
    { title: 'Slide Decks', key: 'ppt' },
    { title: 'eBooks', key: 'ebook' },
    { title: 'Music', key: 'music' },
    { title: 'Links', key: 'link' }
  ];

  const displayItem = (item) => {
    let icon = null;
    switch (item.type) {
      case 'word':
        icon = faFileWord;
        break;
      case 'ppt':
        icon = faFilePowerpoint;
        break;
      case 'ebook':
        icon = faFilePdf;
        break;
      case 'music':
        icon = faVolumeUp;
        break;
      case 'link':
        icon = faLink;
        break;
    }

    return (
      <a
        className="block px-4 py-2 border-b border-gray-200 w-full rounded-t-lg cursor-pointer no-underline"
        href={item.link}
        key={item.name}
        target="_blank"
      >
        <FontAwesomeIcon
          icon={icon}
          className='icon space-right'
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
        onClick={setActive(category.key)}
        className={(currentTab.toLowerCase() === category.key ? 'bg-primary text-white' : 'hover:bg-gray-200 text-primary') + ' rounded-l px-6 py-2 border-2 border-primary font-medium text-xs leading-tight focus:outline-none focus:ring-0 transition duration-50 ease-in-out'}
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

  const getAllItemsForTab = () => {
    if (currentTab === 'all') {
      setItems(allItems);
    } else {
      setItems(allItems.filter(item => item.type === currentTab));
    }
  };

  const querySupabase = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('downloads')
      .select();

    if (error) {
      setIsError(true);
    }
    else {
      setAllItems(data);
      setItems(data);
      setIsLoading(false);
    }
  };

  const setActive = (tab) => (e) => {
    e.preventDefault();
    setCurrentTab(tab);
  };

  useEffect(() => {
    querySupabase();
  }, []);

  useEffect(() => {
    const options = {
      keys: ['name']
    };

    setFuse(new Fuse(items, options));
  }, [items]);

  useEffect(() => {
    getAllItemsForTab();
  }, [currentTab]);

  return (
    <Layout title="Resources & Downloads">
      <p>
        Here's a directory of free and premium resources. Anything not owned by me is clearly marked as such.
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
      {isError ? (
        <div className="section has-text-centered">
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className='icon'
          /> There was an error loading downloads.
        </div>
      ) : isLoading ? <Loader/> :
        <div className="flex justify-center w-full pt-4">
          <ul className="bg-white rounded-lg border border-gray-200 w-full text-gray-900">
            {items.map(displayItem)}
          </ul>
        </div>
      }
    </Layout>
  );
};
