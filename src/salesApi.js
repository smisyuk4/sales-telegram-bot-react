import axios from 'axios';
axios.defaults.baseURL = 'https://telegram-bot-d339c.ew.r.appspot.com';

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
