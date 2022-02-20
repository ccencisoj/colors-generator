import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { 
      icon: Icon,
      label,
      primary,
      secundary,
      expand,
      flex,
      onClick 
    } = this.props;

    const styles_button = clsx({
      [styles.button]: true,
      [styles.primary]: primary,
      [styles.secundary]: secundary,
      [styles.icon]: Icon,
      [styles.only_icon]: Icon && !label,
      [styles.expand]: expand,
      [styles.flex]: flex
    }); 

    return (
      <button className={styles_button} onClick={onClick}>
        {Icon && <Icon className={styles.icon}/>}
        {label && <p className={styles.label}>{label}</p>}
      </button>
    )
  }
}

export default Button;