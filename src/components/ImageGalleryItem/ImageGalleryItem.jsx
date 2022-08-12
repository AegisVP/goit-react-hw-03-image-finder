import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';
import { PropTypes } from 'prop-types';

export const ImageGalleryItem = ({ onToggleModalImage, image }) => {
  return (
    <GalleryItem>
      <GalleryImage onClick={onToggleModalImage} src={image} alt="" width="180" />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  onToggleModalImage: PropTypes.func.isRequired,
};
