import { Notify } from '../components/Notify';
import { HomeStyled } from './pagesStyle';
const { VITE_CHANNEL_ID, HUB_BASE_URL } = import.meta.env;

const HomePage = () => {
  console.log('VITE_CHANNEL_ID = ', VITE_CHANNEL_ID);
  console.log('HUB_BASE_URL = ', HUB_BASE_URL);
  return (
    <HomeStyled>
      <Notify />
    </HomeStyled>
  );
};

export default HomePage;
