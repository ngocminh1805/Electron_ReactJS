import * as React from 'react';
import styles from './header.css';


const logo  = require('../../assets/logo.svg').default
const menu  = require('../../assets/menu.svg').default
const image = require( '../../assets/image.jpg').default

class Header extends React.PureComponent {
  onClickMenu = () => {
    // eslint-disable-next-line no-shadow
    const menu: any = document.getElementById('global_menu_container');
    const layer: any = document.getElementById('global_menu_full');

    menu.classList.add('active');
    layer.classList.add('active');
  };

  render() {
    return (
      <div className={styles.header_container}>
        <img
          src={menu}
          className={styles.menu_btn_icon}
          onClick={this.onClickMenu}
        />
        <div className={styles.logo_container}>
          <img src={logo} className={styles.web_logo} />
        </div>
        <img src={image} className={styles.user_avatar} />
        <div className="toolbar-container" />
      </div>
    );
  }
}

export default Header;
