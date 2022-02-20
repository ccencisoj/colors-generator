import React from 'react';
import GridItem from 'components/GridItem';
import styles from './ColorSquare.module.scss';

class ColorSquare extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { color } = this.props;

    return (
      <GridItem>
        <div className={styles.color_square}>
          <div className={styles.column}>
            <div className={styles.color} 
              style={{backgroundColor: color}}>
            </div>
            <p className={styles.label}>{color}</p>
          </div>
        </div>
      </GridItem>
    )
  }
}

export default ColorSquare;