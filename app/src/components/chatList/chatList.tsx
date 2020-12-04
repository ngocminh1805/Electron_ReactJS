import * as React from 'react';
import ChatItem from './chatItem';
import styles from './chatList.css';

type chatItem = {
  userImage: any;
  userName: string;
  message: string;
  time: Date;
  isSeen: boolean;
  isOnline: boolean;
  isGroup?: boolean | false;
};

const image = require('../../assets/image.jpg').default

class ChatList extends React.PureComponent {
  chatlist: chatItem[] = [
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: false,
      time: new Date(),
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
      isGroup: true,
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
      isGroup: true,
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
      isGroup: true,
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
      isGroup: true,
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: false,
      time: new Date(),
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: false,
      time: new Date(),
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: false,
      time: new Date(),
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: 'Ngọc Minh',
      userImage: image,
      message: 'danh sách các lỗi cần fix',
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
  ];

  listitem = this.chatlist.map((item) => (
    <li>
      <ChatItem
        isOnline={item.isOnline}
        isSeen={item.isSeen}
        time={item.time}
        userName={item.userName}
        userImage={item.userImage}
        message={item.message}
        isGroup={item.isGroup}
      />
    </li>
  ));

  render() {
    return (
      <div className={styles.chatlist_container}>
        <ul>{this.listitem}</ul>
      </div>
    );
  }
}

export default ChatList;
