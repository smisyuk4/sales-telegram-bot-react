import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';

export const salesApi = async (path, data) => {
  return await axios
    .post(path, data, {
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
    })
    .then(response => {
      return response.data;
    });
};
