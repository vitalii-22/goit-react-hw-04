import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ photos, handleClickImg }) => {
  return (
    <ul className={css.galleryList}>
      {photos.map(photo => (
        <li className={css.galleryItem} key={photo.id}>
          <ImageCard {...photo} handleClickImg={handleClickImg} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
