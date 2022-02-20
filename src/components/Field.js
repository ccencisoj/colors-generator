import React from 'react';
import clsx from 'clsx';
import styles from './Field.module.scss';

class Field extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (ev)=> {
    let value = ev.target.value;
    const { 
      type, 
      onChange=(()=>1) 
    } = this.props;

    if(type === "number") {
      value = value.split("")
      .filter((c)=> /\d/.test(c)).join("");
      ev.target.value = value;
      return onChange(Number(value));
    }

    onChange(value);
  }

  render = ()=> {
    const { 
      label, 
      placeholder,
      expand,
      flex,
      type
    } = this.props;

    const styles_field = clsx({
      [styles.field]: true,
      [styles.expand]: expand,
      [styles.flex]: flex
    });

    return (
      <div className={styles_field}>
        {label && <p className={styles.label}>{label}</p>}
        <input type="text"
          placeholder={placeholder}
          className={styles.input}
          onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Field;