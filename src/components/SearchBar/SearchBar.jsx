import css from './SearchBar.module.css';
import { BiSearch } from 'react-icons/bi';
import toast, { Toaster } from 'react-hot-toast';

const notify = () =>
  toast('Please enter a search parameter!', {
    style: {
      borderRadius: '50px',
      background: '#333',
      color: '#fff',
    },
  });

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    if (form.elements.search.value.trim() === '') {
      console.log(notify());
      return;
    }
    onSubmit(form.elements.search.value.toLowerCase());

    form.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.formWrapper} onSubmit={handleSubmit}>
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
      <Toaster />
    </header>
  );
};

export default SearchBar;
