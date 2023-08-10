import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalDiv, CloseBtn } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ toggleRulsModal, children }) => {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  });

  const closeModal = ({ target, code }) => {
    console.log('remove n0-scroll - 1');
    if (target.id === 'modalClose' || code === 'Escape') {
      console.log('remove n0-scroll - 2');
      document.body.classList.remove('no-scroll');
      toggleRulsModal();
    }
  };

  return createPortal(
    <ModalDiv id="modalClose" onClick={closeModal}>
      <div>
        <CloseBtn onClick={toggleRulsModal} type="button" aria-label="Close">
          Х
        </CloseBtn>

        {children}
      </div>
    </ModalDiv>,
    modalRoot
  );
};

Modal.propTypes = {
  toggleRulsModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
