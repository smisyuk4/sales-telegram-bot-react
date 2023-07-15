import { HomeStyled } from "./pagesStyle";


const TitleStyle = {
  padding: '5px',
  textAlign: 'center',
  backgroundColor: 'white',
  borderRadius: '12px',
};

const HomePage = () => {
  return (
    <HomeStyled >
      <h1 style={TitleStyle}>
        Вітаємо у нашому <br /> телеграм каналі <br />з купівлі / продажу
      </h1>
    </HomeStyled>
  );
};

export default HomePage;
