import css from './ImageCard.module.css';

const ImageCard = ({ alt_description, urls: { small } }) => {
  return (
    <div>
      <img className={css.images} src={small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
