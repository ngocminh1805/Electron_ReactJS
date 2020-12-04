import * as React from 'react';
import styles from './listmessage.css';
import Message from './message';
import image from '../../assets/image.jpg';

interface Props {}

class ListMessage extends React.PureComponent {
  render() {
    return (
      <div className={styles.list_message}>
        <Message
          //   userName={this.props.profile.userName}
          //   userImage={this.props.profile.userImage}
          userName="Minh be ti"
          userImage={image}
          message="The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as
            opposed to"
          time={new Date()}
          isMine={false}
        />
        <Message
          //   userName={this.props.profile.userName}
          userName="Minh be ti"
          message="The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as
            opposed to"
          time={new Date()}
          isMine={true}
        />
        <Message
          //   userName={this.props.profile.userName}
          //   userImage={this.props.profile.userImage}
          userName="Minh be ti"
          userImage={image}
          message="The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as
            opposed to"
          time={new Date()}
          isMine={true}
        />
        <Message
          //   userName={this.props.profile.userName}
          //   userImage={this.props.profile.userImage}
          userName="Minh be ti"
          userImage={image}
          message="The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as
            opposed to"
          time={new Date()}
          isMine={true}
        />
        <Message
          //   userName={this.props.profile.userName}
          //   userImage={this.props.profile.userImage}
          userName="Minh be ti"
          userImage={image}
          message="The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as
            opposed to"
          time={new Date()}
          isMine={false}
        />
        <Message
          //   userName={this.props.profile.userName}
          //   userImage={this.props.profile.userImage}
          userName="Minh be ti"
          userImage={image}
          message="The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as
            opposed to"
          time={new Date()}
          isMine={false}
        />
        <Message
          //   userName={this.props.profile.userName}
          //   userImage={this.props.profile.userImage}
          userName="Minh be ti"
          userImage={image}
          message="The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as
            opposed to"
          time={new Date()}
          isMine={true}
        />
        <Message
          //   userName={this.props.profile.userName}
          //   userImage={this.props.profile.userImage}
          userName="Minh be ti"
          userImage={image}
          message="The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as
            opposed to"
          time={new Date()}
          isMine={false}
        />
      </div>
    );
  }
}

export default ListMessage;
