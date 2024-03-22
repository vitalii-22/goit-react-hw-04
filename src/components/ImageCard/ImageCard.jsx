import css from './ImageCard.module.css';

const ImageCard = ({
  alt_description,
  urls: { small, regular },
  setShowModal,
  setImgModal,
}) => {
  return (
    <div>
      <img
        onClick={() => {
          setImgModal(regular);
          setShowModal(true);
        }}
        className={css.images}
        src={small}
        alt={alt_description}
      />
    </div>
  );
};

export default ImageCard;
