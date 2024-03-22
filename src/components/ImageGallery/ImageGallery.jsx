import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ photos, liRef, setShowModal, setImgModal }) => {
  return (
    <ul className={css.galleryList}>
      {photos.map(photo => (
        <li
          ref={liRef}
          // onClick={onClick}
          className={css.galleryItem}
          key={photo.id}
        >
          <ImageCard
            {...photo}
            setShowModal={setShowModal}
            setImgModal={setImgModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
