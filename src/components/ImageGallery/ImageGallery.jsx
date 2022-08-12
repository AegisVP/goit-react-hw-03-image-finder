import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import { PropTypes } from 'prop-types';

export const ImageGallery = ({ onToggleModalImage, images }) => {
  return (
    <Gallery className="gallery">
      {images.map(image => (
        <li key={image.id}>
          <ImageGalleryItem
            onToggleModalImage={() => onToggleModalImage(image.largeImageURL)}
            image={image.webformatURL.toString().replace('_640.', '_180.')}
          />
        </li>
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  onToggleModalImage: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};
