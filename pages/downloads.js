import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faSearch
} from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';

export default function Downloads() {
  return (
    <Layout title="Resources & Downloads">
      <div className="panel">
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
                <input type="checkbox" checked />Paid
              </label>
            </div>
            <div className="level-item has-text-centered">
              <label className="checkbox">
                <input type="checkbox" checked />Free
              </label>
            </div>
          </div>
        </div>
        <p className="panel-tabs">
          <a className="is-active download-link">All</a>
          <a className="download-link">Word Docs</a>
          <a className="download-link">Slide Decks</a>
          <a className="download-link">eBooks</a>
          <a className="download-link">Music</a>
          <a className="download-link">Links</a>
        </p>
        <a className="panel-block is-active">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          bulma
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          marksheet
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          minireset.css
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          jgthms.github.io
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-code-branch" aria-hidden="true"></i>
          </span>
          daniellowtw/infboard
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-code-branch" aria-hidden="true"></i>
          </span>
          mojs
        </a>
      </div>
    </Layout>
  );
};
