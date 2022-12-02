import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { ModalContainer, ModalOverlay, ModalWrapper } from './Modal.styles';

type ModalProps = {
  isModalVisible: boolean;
  hide: () => void;
  children?: ReactNode;
};

export const Modal = ({ isModalVisible, hide, children }: ModalProps) => {
  const hideModals = () => {
    hide();
  };

  return isModalVisible
    ? ReactDOM.createPortal(
        <>
          <ModalOverlay />
          <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
            <ModalContainer>{children}</ModalContainer>
          </ModalWrapper>
        </>,
        document.body
      )
    : null;
};
