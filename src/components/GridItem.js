import React from 'react';
import styles from './GridItem.module.scss';

class GridItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children } = this.props;

    return (
      <div className={styles.grid_item}>
        {children}
      </div>
    )
  }
}

export default GridItem;