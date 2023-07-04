import axios from 'axios';
axios.defaults.baseURL = 'https://telegram-bot-d339c.ew.r.appspot.com';

export const salesApi = async (path, data) => {
  // return fetch('https://telegram-bot-d339c.ew.r.appspot.com' + path, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });

  return await axios
    .post(path, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      return response.data;
    })
  // .catch(error => {
  //   console.log('salesApi ===> ', error);
  // });
};
