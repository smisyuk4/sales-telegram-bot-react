import {
  TitleStyle,
  MessageStyled,
  ListStyled,
  ItemStyled,
} from './Notify.styled';

export const Notify = () => {
  return (
    <div>
      <MessageStyled>
        <TitleStyle>
          Вітаємо у нашому <br /> телеграм каналі <br />з купівлі / продажу
        </TitleStyle>
      </MessageStyled>

      <ListStyled>
        <ItemStyled>
          Куплю мопед
          <br />
          050-22-22-222
        </ItemStyled>
        <ItemStyled>
          Продам м'ясорубку
          <br />
          050-45-22-782
        </ItemStyled>
        <ItemStyled>
          Куплю диван
          <br />
          050-22-00-211
        </ItemStyled>
      </ListStyled>
    </div>
  );
};
