import css from './ImageCard.module.css';

const ImageCard = ({
  alt_description,
  urls: { small, regular },
  handleClickImg,
}) => {
  return (
    <div>
      <img
        onClick={() => {
          handleClickImg(regular);
        }}
        className={css.images}
        src={small}
        alt={alt_description}
      />
    </div>
  );
};

export default ImageCard;
