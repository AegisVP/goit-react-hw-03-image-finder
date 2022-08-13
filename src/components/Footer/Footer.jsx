import pixabayLogo from 'images/pixabay-logo.png';
import { PageFooter } from './Footer.styled';

export const Footer = () => {
  return (
    <PageFooter>
      <img src={pixabayLogo} width="320" heigth="62" alt="Images are from Pixabay" />
    </PageFooter>
  );
};
