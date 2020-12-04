import * as React from 'react';
import MenuItem from '../menu/menuItem';
import styles from './globalMenu.css';

//
const aim = require ('../../assets/menu-icon/target.svg').default
const dashboard = require ('../../assets/menu-icon/dashboard.svg').default;
const directory = require ('../../assets/menu-icon/userprofile.svg').default;
const folder = require ('../../assets/menu-icon/folder.svg').default;
const project = require ('../../assets/menu-icon/tabs.svg').default;
const setting = require ('../../assets/menu-icon/setting.svg').default;
const todo = require ('../../assets/menu-icon/tasklist.svg').default;
const todoComplete = require ('../../assets/menu-icon/task check.svg').default;
const todoStar = require ('../../assets/menu-icon/task review.svg').default;
const home = require ('../../assets/menu-icon/home.svg').default;
const meessage = require ('../../assets/menu-icon/message.svg').default;
const close = require ('../../assets/menu-icon/close.svg').default;
const logo = require( '../../assets/logo.svg').default;

class GlobalMenu extends React.PureComponent {
  menuLarge = [
    { icon: home, title: 'Trang chủ' },
    { icon: dashboard, title: 'Dashboard' },
    { icon: aim, title: 'Mục tiêu' },
    { icon: todo, title: 'Công việc' },
    { icon: todoComplete, title: 'Yêu cầu phê duyệt' },
    { icon: project, title: 'Dự án' },
    { icon: folder, title: 'Drive' },
    { icon: todoStar, title: 'Đánh giá' },
    { icon: directory, title: 'Trung tâm nhân lực' },
    { icon: meessage, title: 'Trò chuyện' },
    { icon: setting, title: 'Quản trị' },
  ];

  onClose = () => {
    const menu: any = document.getElementById('global_menu_container');
    menu.classList.remove('active');
    const layer: any = document.getElementById('global_menu_full');
    layer.classList.remove('active');
  };

  render() {
    return (
      <div className={styles.global_menu_full} id="global_menu_full">
        <div
          className={styles.global_menu_container}
          id="global_menu_container"
        >
          <div className={styles.global_menu_header}>
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={logo} className={styles.web_logo} />
            </div>
            <div onClick={this.onClose}>
              <img src={close} className={styles.close_btn} />
            </div>
          </div>
          <div className={styles.global_menu_body}>
            {this.menuLarge.map((item) => (
              <MenuItem icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default GlobalMenu;
