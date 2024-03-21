import css from './ImageCard.module.css';

const ImageCard = ({
  alt_description,
  urls: { small, regular },
  setImgModal,
}) => {
  return (
    <div>
      <img
        onClick={() => {
          setImgModal(regular);
        }}
        className={css.images}
        src={small}
        alt={alt_description}
      />
    </div>
  );
};

export default ImageCard;
