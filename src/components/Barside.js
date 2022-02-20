import React from 'react';
import styles from './Barside.module.scss';
import Generator from 'components/Generator';

class Barside extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    return (
      <div className={styles.barside}>
        <Generator/>
      </div>
    )
  }
}

export default Barside;