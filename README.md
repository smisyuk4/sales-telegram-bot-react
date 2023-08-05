# react-app - vite + gh page

two server deploy:

- gh page
- firebase

- [style input button](https://stackoverflow.com/questions/572768/styling-an-input-type-file-button)

# switch production and development process

- **hide rows for production mode:** `file - main.jsx` =
  <BrowserRouter basename="/sales-telegram-bot-react/"> `file - vite.config.js`
  = base: '/sales-telegram-bot-react/' `file - salesApi.js` =
  axios.defaults.baseURL = 'https://telegram-bot-d339c.ew.r.appspot.com';

- **show row for development mode:** `file - salesApi.js` =
  axios.defaults.baseURL =
  'https://sales-telegram-bot-node-dev-test.onrender.com'


  - [react-loader](https://mhnpd.github.io/react-loader-spinner/docs/components/mutating-dots/)


# Deploy on Firebase
написати документацію

---- новий тест
