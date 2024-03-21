import { useEffect, useRef, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { fetchPhotos } from './services/api';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState('1');
  const [query, setQuery] = useState(null);
  const [showBtn, setShowBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imgModal, setImgModal] = useState(null);

  const liRef = useRef();

  // const myApiKey = 'LJO6b4lyBmug5TFGgGqqzNoEbjceV13Vd_Ky8tHole0';

  useEffect(() => {
    if (!query) return;
    async function fetchResponse() {
      try {
        setLoading(true);
        const response = await fetchPhotos(query, page);

        setPhotos([...photos, ...response.data.results]);
        setShowBtn(
          response.data.total_pages && response.data.total_pages !== page
        );
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchResponse();
  }, [query, page]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setPage(1);
    setPhotos([]);

    const form = evt.target;
    if (form.elements.search.value.trim() === '') {
      alert('Please enter search term!');
      return;
    }
    setQuery(form.elements.search.value.toLowerCase());

    form.reset();
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!imgModal) return;
    setShowModal(true);
  }, [imgModal]);

  const handleRequestCloseFunc = () => {
    setShowModal(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isError && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery liRef={liRef} photos={photos} setImgModal={setImgModal} />
      )}
      {loading && <Loader />}
      {showBtn && <LoadMoreBtn onClick={handleClick} />}

      <ImageModal
        imgModal={imgModal}
        showModal={showModal}
        handleRequestCloseFunc={handleRequestCloseFunc}
        ariaHideApp={false}
      />
    </>
  );
}

export default App;
