import * as React from 'react';
import ChatlistHeader from './components/chatlist-header/chatlistHeader';
import ChatList from './components/chatList/chatList';
import GlobalMenu from './components/global-menu/globalMenu';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import SearchBar from './components/searchbar/searchbar';
import BoxChat from './components/boxchat/boxchat';
import './Home.css';
// import image from '';

class Home extends React.PureComponent {
  render() {
    return (
      <div className="container" style={{ height: window.innerHeight }}>
        <GlobalMenu />
        <Header />
        <div
          className="body-container"
          style={{ height: window.innerHeight - 50 }}
        >
          <div className="body-column-1">
            <Menu />
          </div>
          <div className="body-column-2">
            <ChatlistHeader />
            <SearchBar />
            <ChatList />
          </div>
          <div className="body-column-3">
            {/* <BoxChat/> */}
            <BoxChat
              profile={{
                // eslint-disable-next-line global-require
                userImage: require('./assets/image.jpg'),
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

export default Home;
