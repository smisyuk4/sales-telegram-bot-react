import { MutatingDots } from 'react-loader-spinner';
import { DivStyled } from './Loader.styled';

export const Loader = () => {
  return <DivStyled>
      <MutatingDots
          height="100"
          width="100"
          color="#0057B8"
          secondaryColor="#FFD700"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperClass="loader"
          visible={true}
        />
  </DivStyled>;
};