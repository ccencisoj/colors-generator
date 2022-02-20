import React from 'react';
import styles from './Grid.module.scss';

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children } = this.props;

    return (
      <div className={styles.grid}>
        {children}
      </div>
    )
  }
}

export default Grid;