import React from 'react';
import clsx from 'clsx';
import ModalBase from 'components/ModalBase';
import Generator from 'components/Generator';
import { MODAL_TIMEOUT } from 'constants/common';
import styles from './GeneratorModal.module.scss';

class GeneratorModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { willHiddenModal , hideModal} = this.props;

    const styles_generator_modal = clsx({
      [styles.generator_modal]: true,
      [styles.will_hidden_modal]: willHiddenModal
    });

    return (
      <ModalBase 
        willHiddenModal={willHiddenModal} 
        hideModal={hideModal}>
        <div className={styles_generator_modal}>
          <Generator 
            variant="modal"
            hideModal={()=> hideModal(MODAL_TIMEOUT)}/>
        </div>
      </ModalBase>
    )
  }
}

export default GeneratorModal;