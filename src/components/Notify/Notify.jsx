import {
  TitleStyle,
  MessageStyled,
  ListStyled,
  ItemStyled,
  TextStyled,
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
          <TextStyled>
            Куплю мопед
            <br />
            050-22-22-222
          </TextStyled>
        </ItemStyled>
        <ItemStyled>
          <TextStyled>
            Продам мясорубку
            <br />
            050-45-22-782
          </TextStyled>
        </ItemStyled>
        <ItemStyled>
          <TextStyled>
            Куплю диван
            <br />
            050-22-00-211
          </TextStyled>
        </ItemStyled>
      </ListStyled>
    </div>
  );
};
