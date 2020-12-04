import * as React from 'react';
import styles from './boxchatheader.css';

interface Props {
  userImage: any;
  userName: string;
  isOnline: boolean;
}

class BoxchatHeader extends React.PureComponent<Props> {
  render() {
    const { userImage, userName, isOnline } = this.props;
    return (
      <div className={styles.boxchatheader_container}>
        <div className={styles.boxchatheader_avatar}>
          <div
            className={styles.status_light}
            style={{ backgroundColor: isOnline ? '' : '#808999' }}
          ></div>
          <img src={userImage} className={styles.avatar_image} />
        </div>
        <div className={styles.boxchatheader_content}>
          <span className={styles.boxchatheader_userName}>{userName}</span>
          <span className={styles.boxchatheader_isonline}>
            {isOnline ? 'Đang online' : 'Offlie'}
          </span>
        </div>
        <div className={styles.boxchatheader_toolbar}>
          <img src={require('../../assets/camera.svg').default} className={styles.icon} />
          <img src={require('../../assets/search.svg').default} className={styles.icon} />
          <img src={require('../../assets/more.svg').default} className={styles.icon} />
        </div>
      </div>
    );
  }
}

export default BoxchatHeader;
