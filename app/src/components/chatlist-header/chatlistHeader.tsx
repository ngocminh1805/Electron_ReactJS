import * as React from 'react';
import styles from './chatlistHeader.css';


class ChatlistHeader extends React.PureComponent {
  render() {
    return (
      <div className={styles.chatlist_header_container}>
        <div className={styles.chatlist_header_container_child}>
          <span className={styles.chatlist_header_title}>Trò chuyện</span>
        </div>
        <div className={styles.chatlist_header_container_child_right}>
          <img className={styles.chatlist_header_icon} src={require('../../assets/edit.svg').default} />
        </div>
      </div>
    );
  }
}
export default ChatlistHeader;
