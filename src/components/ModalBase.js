import React from 'react';
import clsx from 'clsx';
import styles from './ModalBase.module.scss';
import { MODAL_TIMEOUT } from 'constants/common';
import OutsideClickHandler from 'react-outside-click-handler';

class ModalBase extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { 
      children, 
      willHiddenModal, 
      hideModal 
    } = this.props;

    const styles_modal_base = clsx({
      [styles.modal_base]: true,
      [styles.will_hidden_modal]: willHiddenModal
    });

    return (
      <div className={styles_modal_base}>
        <OutsideClickHandler 
          onOutsideClick={()=> hideModal(MODAL_TIMEOUT)}>
          {children}
        </OutsideClickHandler>
      </div>
    )
  }
}

export default ModalBase;