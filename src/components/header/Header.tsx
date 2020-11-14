import React from 'react';
import styles from './Header.module.scss';

function Header(): JSX.Element {
  return(
    <div className={styles.Header}>
      <h1>
        Awesome New Weather Dashboard
      </h1>
    </div>
  )
}

export default Header;