import { MutatingDots } from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import { LoaderScreen } from './Loader.styled';

const modalRoot = document.getElementById('loader-root');

export const Loader = () => {
  return createPortal(
    <LoaderScreen>
      <MutatingDots
        height="100"
        width="100"
        color="#0057B8"
        secondaryColor="#FFD700"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        visible={true}
      />
    </LoaderScreen>,
    modalRoot
  );
};
