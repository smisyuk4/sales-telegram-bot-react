import axios from 'axios';
// axios.defaults.baseURL = 'https://telegrambotnode-394718.ey.r.appspot.com'; // production server
axios.defaults.baseURL = 'https://sales-telegram-bot-node.onrender.com'; // test server

export const salesApi = async (path, data, config) => {
  return await axios.post(path, data, config).then(response => {
    return response.data;
  });
};
