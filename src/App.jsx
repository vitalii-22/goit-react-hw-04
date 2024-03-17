import { useState } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState('1');
  // const [paramsQuery, setParamsQuery] = useState('');

  const myApiKey = 'LJO6b4lyBmug5TFGgGqqzNoEbjceV13Vd_Ky8tHole0';
  let paramsQuery = '';

  // let page = 1;
  const fetchPhotos = async page => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            client_id: myApiKey,
            query: `${paramsQuery}`,
            page: `${page}`,
            per_page: 12,
          },
        }
      );

      setPhotos(response.data.results);
      setPage((page += 1));
    } catch (error) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setPhotos([]);

    const form = evt.target;
    console.log(form.elements.search.value.toLowerCase());
    if (form.elements.search.value.trim() === '') {
      alert('Please enter search term!');
      return;
    }
    // setParamsQuery(form.elements.search.value.toLowerCase());
    paramsQuery = form.elements.search.value.toLowerCase();

    fetchPhotos(page);

    form.reset();
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isError && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery photos={photos} />}
      {loading && <Loader />}
      {/* {photos.length > 12 && <LoadMoreBtn onClick={fetchPhotos} />} */}
      <LoadMoreBtn onClick={fetchPhotos} pageParam={page} />
    </>
  );
}

export default App;
