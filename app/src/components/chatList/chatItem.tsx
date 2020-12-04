import * as React from 'react';
import styles from './chatItem.css';
import moment from 'moment';

interface Props {
  userImage: any;
  userName: string;
  message: string;
  time: Date;
  isSeen: boolean;
  isOnline: boolean;
  isGroup?: boolean | false;
}

interface State {}

class ChatItem extends React.PureComponent<Props> {
  render() {
    const {
      userImage,
      userName,
      message,
      time,
      isSeen,
      isOnline,
      isGroup,
    } = this.props;
    return (
      <div
        className={styles.chatitem_container}
        style={{ backgroundColor: isSeen ? '' : '#EEF0F7' }}
      >
        <div className={styles.chatitem_avatar}>
          <div
            className={styles.status_light}
            style={{ backgroundColor: isOnline ? '' : '#808999' }}
          ></div>
          <img src={userImage} className={styles.avatar_image} />
        </div>
        <div className={styles.chatitem_content}>
          <div className={styles.chat_userName_ctn}>
            <span className={styles.chat_userName}>{userName}</span>
            <div
              className={styles.grouptag}
              style={{ display: isGroup ? 'flex' : 'none' }}
            >
              NHÓM
            </div>
          </div>

          <span
            className={styles.chat_message}
            style={{ fontWeight: isSeen ? 'normal' : 'bold' }}
          >
            {message}
          </span>
        </div>
        <div className={styles.chatitem_right_ctn}>
          <span className={styles.chatitem_right_ctn}>{moment(time).format('HH:mm')}</span>
          <div
            className={styles.isSeen_icon}
            style={{ display: isSeen ? 'none' : 'block' }}
          ></div>
        </div>
      </div>
    );
  }
}

export default ChatItem;
