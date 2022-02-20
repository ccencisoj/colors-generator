import React from 'react';
import Field from 'components/Field';
import { connect } from 'react-redux';
import Button from 'components/Button';
import styles from './Generator.module.scss';
import { UPDATE_DIVISOR } from 'constants/actionTypes';

const mapActionsToProps = (dispatch)=> ({
  updateDivisor: (divisor)=> dispatch({
    type: UPDATE_DIVISOR,
    payload: divisor
  })
});

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {divisor: 0};
  }

  render = ()=> {
    const { 
      updateDivisor, 
      variant,
      hideModal
    } = this.props;
    const { divisor } = this.state;

    return (
      <div className={styles.generator}>
        <div className={styles.header}>
          <p className={styles.title}>Generador</p>
        </div>
        <div className={styles.main}>
          <Field
            type="number"
            expand={true}
            placeholder="Cantidad de colores"
            onChange={(value)=> 
              this.setState({divisor: value || 0})}/>
          <Button
            expand={true}
            primary={true}
            label="Generar colores"
            onClick={()=> {
              updateDivisor(divisor);
              if(variant === "modal") hideModal();
            }}/>
        </div>
      </div>
    )
  }
}

const ConnectedGenerator = connect(
  null, mapActionsToProps)(Generator);

export default ConnectedGenerator;