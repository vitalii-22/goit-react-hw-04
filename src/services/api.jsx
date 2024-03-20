import axios from 'axios';

export const fetchPhotos = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: 'LJO6b4lyBmug5TFGgGqqzNoEbjceV13Vd_Ky8tHole0',
      query: `${query}`,
      page: `${page}`,
      per_page: 12,
    },
  });

  return response;
};
