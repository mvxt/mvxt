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
        className="panel-block"
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
        {item.isFree ? <span className="tag is-light space-left">Free</span> :
          <span className="tag is-primary space-left">Paid</span>
        }
      </a>
    );
  };

  const filterItems = (e) => {
    if (e.target.value) {
      setItems(fuse.search(e.target.value).map(item => item.item));
    } else {
      setItems(allItems.filter(item => item.type === currentTab));
    }
  };

  const getAllItems = async () => {
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
    getAllItems();
  }, []);

  useEffect(() => {
    const options = {
      keys: ['name']
    };

    setFuse(new Fuse(items, options));
  }, [items]);

  useEffect(() => {
    if (currentTab === 'all') {
      setItems(allItems);
    } else {
      setItems(allItems.filter(item => item.type === currentTab));
    }
  }, [currentTab]);

  return (
    <Layout title="Resources & Downloads">
      <p>
        Here's a directory of free and paid resources. Anything not owned by me is clearly marked as such.
      </p>
      <p>
        <b>DISCLAIMER:</b> These resources are provided as-is and without any guarantees or warranties. I assume no responsibility or liability for anything that happens should you use these resources.
      </p>
      <div className="panel is-primary">
        <div className="panel-block">
          <div className="control has-icons-left">
            <input
              className="input is-primary"
              type="text"
              onChange={filterItems}
              placeholder="Search items"
            />
            <FontAwesomeIcon
              icon={faSearch}
              size='xs'
              className='icon is-left search-icon'
            />
          </div>
        </div>
        <div className="panel-tabs">
          <a
            className={currentTab.toLowerCase() === "all" ? activeClasses : inactiveClass}
            onClick={setActive("all")}
          >
            All
          </a>
          <a
            className={currentTab.toLowerCase() === "word" ? activeClasses : inactiveClass}
            onClick={setActive("word")}
          >
            Word Docs
          </a>
          <a
            className={currentTab.toLowerCase() === "ppt" ? activeClasses : inactiveClass}
            onClick={setActive("ppt")}
          >
            Slide Decks
          </a>
          <a
            className={currentTab.toLowerCase() === "ebooks" ? activeClasses : inactiveClass}
            onClick={setActive("ebook")}
          >
            eBooks
          </a>
          <a
            className={currentTab.toLowerCase() === "music" ? activeClasses : inactiveClass}
            onClick={setActive("music")}
          >
            Music
          </a>
          <a
            className={currentTab.toLowerCase() === "links" ? activeClasses : inactiveClass}
            onClick={setActive("link")}
          >
            Links
          </a>
        </div>
        {isError ? (
          <div className="section has-text-centered">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className='icon'
            /> There was an error loading downloads.
          </div>
        ) : isLoading ? <Loader/> :
            items.map(displayItem)
        }
      </div>
    </Layout>
  );
};
