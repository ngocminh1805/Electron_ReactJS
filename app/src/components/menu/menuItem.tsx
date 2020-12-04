import * as React from 'react';
import styles from './menuItem.css';

interface Props {
  icon: any;
  title?: string;
}

class MenuItem extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  onClickItem = () => {
    console.log('Click menu item ', this.props.title);
  };

  render() {
    const { icon, title } = this.props;
    return (
      <button className={styles.menu_item}>
        <img src={icon} className={styles.menu_icon} />
        <span className={styles.menu_item_title}>{title}</span>
      </button>
    );
  }
}

export default MenuItem;
