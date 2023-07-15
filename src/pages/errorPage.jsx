import { ErrorStyled, TitleStyle } from './pagesStyle';

const errorPage = () => {
  return (
    <ErrorStyled>
      <TitleStyle>Сторінка не знайдена</TitleStyle>
    </ErrorStyled>
  );
};

export default errorPage;
