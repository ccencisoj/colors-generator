import React from 'react';
import * as Icon from 'react-feather';
import Button from 'components/Button';
import styles from './Navigation.module.scss';
import { useModals } from 'hooks/ModalsContext';
import GeneratorModal from 'components/GeneratorModal';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { modals } = this.props;

    return (
      <div className={styles.navigation}>
        <div className={styles.left}>
          <Button
            icon={Icon.Menu}/>

        </div>
        <div className={styles.right}>
          <Button
            primary={true}
            label="Generar colores"
            onClick={()=> modals.add(GeneratorModal, {})}/>
        </div>
      </div>
    )
  }
}

export default (props)=> {
  const modals = useModals();

  return <Navigation {...props}
    modals={modals}/>
}