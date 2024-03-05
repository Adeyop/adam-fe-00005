import axios from 'axios';

const apiKey = '3574cb01a1cad762abc217d37a68c03c';
const baseUrl = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: baseUrl,
});

export const getCertifications = async () => {
  try {
    const response = await api.get(`/certification/movie/list?api_key=${apiKey}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieListIds = async () => {
  try {
    const response = await api.get(`/movie/changes?api_key=${apiKey}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const discoverMovies = async () => {
  try {
    const response = await api.get(`/discover/movie?api_key=${apiKey}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
