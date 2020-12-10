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

interface Props{}
interface State{
  height: number,
  width: number,
}

class App extends React.PureComponent<Props,State> {

  constructor(props:Props){
    super(props)

      this.state = {
        height:window.innerHeight,
        width:window.innerWidth
      }
  }

  updateSize = () => {
    this.setState({width:window.innerWidth,height:window.innerHeight});
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateSize);
  }

  render() {
    return (
      <div className={styles.container} style={{ height:this.state.height, width: this.state.width }}>
        <GlobalMenu />
        <Header />
        <div
          className={styles.body_container}
          style={{ height:this.state.height - 50 }}
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
