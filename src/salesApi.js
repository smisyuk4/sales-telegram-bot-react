import axios from 'axios';
const { VITE_PATH_TO_SERVER } = import.meta.env;
// axios.defaults.baseURL = 'https://telegram-bot-d339c.ew.r.appspot.com';
// axios.defaults.baseURL = 'https://sales-telegram-bot-node-dev-test.onrender.com'; // test server
axios.defaults.baseURL = VITE_PATH_TO_SERVER;

export const salesApi = async (path, data, config) => {
  return await axios.post(path, data, config).then(response => {
    return response.data;
  });
};
