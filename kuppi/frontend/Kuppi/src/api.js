import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';
if (!import.meta.env.VITE_API_URL) {
  console.warn('VITE_API_URL is not defined. Using fallback URL:', baseURL);
}

const API = axios.create({
  baseURL,
});

export const getItems = () => API.get('/items');
export const createItem = (data) => API.post('/items', data);
export const deleteItem = (id) => API.delete(`/items/${id}`);
export const updateItem = (id, data) => API.put(`/items/${id}`, data);