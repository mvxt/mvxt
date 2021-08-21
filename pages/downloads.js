import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUB_API_KEY)

export default function Downloads() {
  const [showFree, setShowFree] = useState(true);
  const [showPaid, setShowPaid] = useState(true);
  const [currentTab, setCurrentTab] = useState('all');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

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

  const getItems = async (type) => {
    setIsLoading(true);
    const { data, error } = type === 'all' ? await supabase
      .from('downloads')
      .select() : await supabase
      .from('downloads')
      .select()
      .eq('type', type);

    if (error) {
      setIsError(true);
    }
    else {
      setItems(data);
      setIsLoading(false);
    }
  };

  const handleFreeToggle = () => {
    setShowFree(!showFree);
  };

  const handlePaidToggle = () => {
    setShowPaid(!showPaid);
  };

  const setActive = (tab) => (e) => {
    e.preventDefault();
    setCurrentTab(tab);
  };

  useEffect(() => {
    getItems(currentTab);
  }, [currentTab]);

  return (
    <Layout title="Resources & Downloads">
      <div className="panel is-primary">
        <div className="panel-block">
          <div className="control has-icons-left">
            <input className="input is-primary" type="text" placeholder="Search" />
            <FontAwesomeIcon
              icon={faSearch}
              size='xs'
              className='icon is-left search-icon'
            />
          </div>
          <div className="panel-block level">
            <div className="level-item has-text-centered">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={showPaid}
                  onChange={handlePaidToggle}
                />Paid
              </label>
            </div>
            <div className="level-item has-text-centered">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={showFree}
                  onChange={handleFreeToggle}
                />Free
              </label>
            </div>
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
            onClick={setActive("ebooks")}
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
            onClick={setActive("links")}
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
