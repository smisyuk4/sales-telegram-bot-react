import { Notify } from '../components/Notify';
import { HomeStyled } from './pagesStyle';
const { VITE_CHANNEL_ID } = import.meta.env;

const HomePage = () => {
  console.log(VITE_CHANNEL_ID);
  return (
    <HomeStyled>
      <Notify />
    </HomeStyled>
  );
};

export default HomePage;
