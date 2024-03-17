import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ photos }) => {
  console.log(photos);
  return (
    <ul className={css.galleryList}>
      {photos.map(photo => (
        <li className={css.galleryItem} key={photo.id}>
          <ImageCard {...photo} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
