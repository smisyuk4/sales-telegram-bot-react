const HomeStyle = {
  backgroundImage: `url(../src/assets/wall.jpeg)`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',

  height: '600px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const TitleStyle = {
  padding: '5px',
  textAlign: 'center',
  backgroundColor: 'white',
  borderRadius: '12px',
};

const HomePage = () => {
  return (
    <div style={HomeStyle}>
      <h1 style={TitleStyle}>
        Вітаємо у нашому <br /> телеграм каналі <br />з купівлі / продажу
      </h1>
    </div>
  );
};

export default HomePage;
