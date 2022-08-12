import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContent } from './Modal.styled';

const modalRoot = document.getElementById('modal-portal');

export class Modal extends Component {
  componentDidMount() {
    const { onKeyDown } = this.props;
    window.addEventListener('keydown', onKeyDown);
  }

  componentWillUnmount() {
    const { onKeyDown } = this.props;
    window.removeEventListener('keydown', onKeyDown);
  }

  render() {
    const { children, onCloseModal } = this.props;
    return createPortal(
      <Overlay onClick={onCloseModal}>
        <ModalContent>{children}</ModalContent>
      </Overlay>,
      modalRoot
    );
  }
}
