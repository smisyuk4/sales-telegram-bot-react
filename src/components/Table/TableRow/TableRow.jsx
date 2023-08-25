import PropTypes from 'prop-types';
import { dateConverterAdminSide } from '../../../helpers/date';
import { DivStyled } from './TableRow.styled';

export const TableRow = ({ item, num, openModal }) => {
  const { createdAt, user, title } = item;

  return (
    <>
      <tr onClick={() => openModal(item)}>
        <td className="number">{num}</td>
        <td className="date">
          {dateConverterAdminSide(createdAt?.seconds, 'dd.MM.yyyy')}
        </td>
        <td className="user">{user}</td>
        <td className="title">{title}</td>
      </tr>
    </>
  );
};

TableRow.propTypes = {
  item: PropTypes.object.isRequired,
  num: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

// contact
// :
// "@smisyuk"
// cost
// :
// "14134"
// createdAt
// :
// Timestamp {seconds: 1691104059, nanoseconds: 969000000}
// description
// :
// "Qwerwerwe"
// msgId
// :
// "1691104059967"
// payment
// :
// false
// photoURL
// :
// ['https://storage.googleapis.com/photo-for-sales-chanel/1691104049429_9W5RAO4d.kpCNvSAYW.jpg']
// title
// :
// "Qweqweq"
// type
// :
// "sale"
// updatedAt
// :
// Timestamp {seconds: 1691104059, nanoseconds: 969000000}
// user
// :
// "smisyuk"
