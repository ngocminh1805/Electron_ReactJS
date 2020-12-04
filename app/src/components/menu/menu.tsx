import * as React from 'react';
import styles from './menu.css';
import MenuItem from './menuItem';

// import icon
const meessage = require('../../assets/menu-icon/message.svg').default;
const bell = require('../../assets/menu-icon/bell.svg').default;
const chat = require('../../assets/menu-icon/usergroup.svg').default;
const question = require('../../assets/menu-icon/question.svg').default;

interface Props {}

interface State {}

// const question = require('../../assets/menu-icon/question.svg')

class Menu extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  menuSmall = [{ icon: meessage }, { icon: chat }, { icon: bell }];

  componentDidMount() {
    const btn = document.getElementsByClassName('menu_item');
    var i: number;
    for (i = 0; i < btn.length; i++) {
      const btn_item: any = btn[i];
      btn[i].addEventListener('click', () => {
        btn_item.classList.toggle('active');
      });
    }
  }

  render() {
    return (
      <div className={styles.menu_container} id="menu_container">
        <div className={styles.menu_header}>
          <div id="smallMenu">
            {this.menuSmall.map((item) => (
              <MenuItem icon={item.icon} />
            ))}
          </div>
        </div>
        <div className={styles.menu_footer}>
          <MenuItem icon={question} />
        </div>
      </div>
    );
  }
}

export default Menu;
