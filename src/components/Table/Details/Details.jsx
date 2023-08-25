import PropTypes from 'prop-types';
import { DivStyled, TextStyled } from './Details.styled';
import { ImageList } from '../../ImageList/ImageList';
import { dateConverterAdminSide } from '../../../helpers/date';

export const Details = ({ advertisement }) => {
  const {
    title,
    description,
    photoURL,
    user,
    contact,
    createdAt,
    type,
    cost,
    payment,
    order_id,
    payment_id,
  } = advertisement;

  // const payment = true;
  // const order_id = 'dsss-wewe';
  // const payment_id = 'sdfsdf';
  return (
    <DivStyled>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {photoURL?.length > 0 && <ImageList array={photoURL} />}

        <p>
          <TextStyled>Користувач: </TextStyled>
          {user}
        </p>
        <p>
          <TextStyled>Контакт: </TextStyled>
          {contact}
        </p>
        <p>
          <TextStyled>Дата публікації: </TextStyled>
          {dateConverterAdminSide(createdAt.seconds, 'dd MMMM yyyy')}
        </p>
        <p>
          <TextStyled>Тип оголошення: </TextStyled>
          {type === 'buy' ? 'купівля' : 'продаж'}
        </p>
        {cost && (
          <p>
            <TextStyled>Вартість: </TextStyled>
            {cost} грн
          </p>
        )}

        {payment && (
          <>
            <p>
              <TextStyled>Номер замовлення: </TextStyled>
              {order_id}
            </p>
            <p>
              <TextStyled>Номер платежу: </TextStyled>
              {payment_id}
            </p>
          </>
        )}
      </div>
    </DivStyled>
  );
};

Details.propTypes = {
  advertisement: PropTypes.object.isRequired,
};
