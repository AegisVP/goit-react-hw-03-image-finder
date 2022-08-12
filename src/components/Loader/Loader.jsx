import { createPortal } from 'react-dom';
import { LoaderIcon, Overlay } from './Loader.styled';

const loaderRoot = document.getElementById('loader-portal');

export const Loader = () => {
  return createPortal(
    <Overlay>
      <LoaderIcon>loading...</LoaderIcon>
    </Overlay>,
    loaderRoot
  );
};
