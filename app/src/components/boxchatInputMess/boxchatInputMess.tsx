import * as React from 'react';
import styles from './boxchatInputMess.css';

interface Props {}

interface State {
  width: number;
}

class BoxchatInputMessage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      width: (window.innerWidth - 80) * 0.8,
    };
  }
  updateWidth = () => {
    this.setState({ width: (window.innerWidth - 80) * 0.8 });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth);
  }

  render() {
    return (
      <div
        className={styles.boxchatInput_container}
        id="boxchatInput_container"
        style={{ width: this.state.width }}
      >
        <img src={require('../../assets/gim.svg').default} className={styles.icon} />
        <div className={styles.input_mess_container}>
          <input className={styles.input_mess} placeholder="Nhập nội dung bình luận" />
          <img src={require('../../assets/smile.svg').default} className={styles.icon} />
        </div>
        <img src={require('../../assets/send.svg').default} className={styles.icon} />
      </div>
    );
  }
}

export default BoxchatInputMessage;
