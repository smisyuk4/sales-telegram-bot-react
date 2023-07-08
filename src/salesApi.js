import axios from 'axios';
axios.defaults.baseURL = 'https://telegram-bot-d339c.ew.r.appspot.com';

export const salesApi = async (path, data, config) => {
  return await axios.post(path, data, config).then(response => {
    return response.data;
  });
};
