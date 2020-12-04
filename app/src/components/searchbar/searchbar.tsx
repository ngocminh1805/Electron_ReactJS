import * as React from 'react';
import styles from './searchbar.css';

const search = require('../../assets/search.svg').default;

class SearchBar extends React.PureComponent {
  render() {
    return (
      <div className={styles.searchbar_container}>
        <img className={styles.search_icon} src={search} />
        <input
          className={styles.input_search}
          placeholder="Tìm kiếm cuộc trò chuyện"
        />
      </div>
    );
  }
}

export default SearchBar;
