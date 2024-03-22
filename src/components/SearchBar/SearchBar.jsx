import css from './SearchBar.module.css';
import { BiSearch } from 'react-icons/bi';

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={css.header}>
      <form className={css.formWrapper} onSubmit={onSubmit}>
        <input
          className={css.formInput}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.formButton} type="submit">
          <BiSearch className={css.formSvg} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
