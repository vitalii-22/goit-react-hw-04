import css from './LoadMoreBtn.module.css';
const LoadMoreBtn = ({ onClick, pageParam }) => {
  return (
    <button onClick={onClick} className={css.loadMoreBtn} type="button">
      Load more
    </button>
  );
};
export default LoadMoreBtn;
