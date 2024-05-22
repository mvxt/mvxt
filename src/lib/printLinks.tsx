import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Returns rendering of FontAwesome dictionaries of links
 * @param {object} links 
 */
export default function printLinks(links: Object) {
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

