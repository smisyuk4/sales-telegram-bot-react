import {
  MessageWrp,
  MessageTitle,
  ChannelLink,
  ListStyled,
  ItemStyled,
} from './Notify.styled';

const { VITE_CHANNEL_NAME } = import.meta.env;

export const Notify = () => {
  return (
    <div>
      <MessageWrp>
        <MessageTitle>
          Вітаємо у нашому <br /> телеграм каналі <br />з купівлі / продажу
        </MessageTitle>

        <ChannelLink
          href={`https://t.me/${VITE_CHANNEL_NAME}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to telegram channel"
        >
          {`@${VITE_CHANNEL_NAME}`}
        </ChannelLink>
      </MessageWrp>

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
