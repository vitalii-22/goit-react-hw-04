import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { fetchPhotos } from './services/api';
import ImageModal from './components/ImageModal/ImageModal';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState('1');
  const [query, setQuery] = useState(null);
  const [showBtn, setShowBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imgModal, setImgModal] = useState(null);

  const notify = () =>
    toast('Please enter a search parameter!', {
      style: {
        borderRadius: '50px',
        background: '#333',
        color: '#fff',
      },
    });

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
      notify();
      console.log(notify());
      return;
    }
    setQuery(form.elements.search.value.toLowerCase());

    form.reset();
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  const handleRequestCloseFunc = () => {
    setShowModal(false);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSubmit} />
      {isError && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery
          setShowModal={setShowModal}
          photos={photos}
          setImgModal={setImgModal}
        />
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
