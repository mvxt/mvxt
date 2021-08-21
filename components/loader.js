import { css } from '@emotion/react';
import PropagateLoader from 'react-spinners/PropagateLoader';

export default function Loader() {
  return (
    <div className="loader">
      <PropagateLoader color={"#64171a"} />
    </div>
  );
}
