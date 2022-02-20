import React from 'react';
import styles from './Container.module.scss';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children, title } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    )
  }
}

export default Container;