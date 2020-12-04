import * as React from 'react';
import styles from './message.css';
import moment from 'moment';

interface Props {
  message: string;
  userName: string;
  time: Date;
  userImage?: any;
  isMine: boolean;
}

class Message extends React.PureComponent<Props> {
  render() {
    const { userName, message, userImage, time, isMine } = this.props;
    return (
      <div className={styles.message_master_ctn}>
        <img
          className={styles.message_avatar}
          src={userImage}
          style={{ display: isMine ? 'none' : 'block' }}
        />
        <div
          className={styles.message_cover_ctn}
          style={{
            alignItems: isMine ? 'flex-end' : 'flex-start',
          }}
        >
          <span className={styles.message_username}>{userName}</span>
          <div
            className={styles.message_container}
            style={{
              backgroundColor: isMine ? '#4080FF' : '',
              borderBottomLeftRadius: isMine ? 16 : 0,
              borderBottomRightRadius: isMine ? 0 : 16,
            }}
          >
            <div>
              <span
                className={styles.message_content}
                style={{ color: isMine ? '#fff' : '' }}
              >
                {message}
              </span>
              <span style={{ opacity: 0 }}>..................</span>
              <span
                className={styles.message_time_stamp}
                style={{
                  color: isMine ? 'rgba(255,255,255,0.6)' : '',
                }}
              >
                {moment(time).format('h.mm a')}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Message;
