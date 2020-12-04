import * as React from 'react';
// import './App.css';
import ChatlistHeader from './components/chatlist-header/chatlistHeader';
import ChatList from './components/chatList/chatList';
import GlobalMenu from './components/global-menu/globalMenu';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import SearchBar from './components/searchbar/searchbar';
import BoxChat from './components/boxchat/boxchat';
import styles from './App.css';



class App extends React.PureComponent {
  render() {
    return (
      <div className={styles.container} style={{ height: window.innerHeight }}>
        <GlobalMenu />
        <Header />
        <div
          className={styles.body_container}
          style={{ height: window.innerHeight - 50 }}
        >
          <div className={styles.body_column_1}>
            <Menu />
          </div>
          <div className={styles.body_column_2}>
            <ChatlistHeader />
            <SearchBar />
            <ChatList />
          </div>
          <div className={styles.body_column_3}>
            {/* <BoxChat/> */}
            <BoxChat
              profile={{
                // eslint-disable-next-line global-require
                userImage: require("./assets/image.jpg").default,
                userName: 'Minh Bé Tí',
                isOnline: true,
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;