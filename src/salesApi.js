import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';

export const salesApi = async formData => {
  return await axios.post('/notify', formData).then(response => {
    return response.data;
  });
};
