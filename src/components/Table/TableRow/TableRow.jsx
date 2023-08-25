import PropTypes from 'prop-types';
import EllipsisText from 'react-ellipsis-text';

import { dateConverterAdminSide } from '../../../helpers/date';

export const TableRow = ({ item, num, openModal }) => {
  const { createdAt, user, title } = item;

  return (
    <>
      <tr onClick={() => openModal(item)}>
        <td className="number">{num}</td>
        <td className="date">
          {dateConverterAdminSide(createdAt?.seconds, 'dd.MM.yy')}
        </td>
        <td className="user">{<EllipsisText text={user} length={8} />}</td>
        <td className="title">{<EllipsisText text={title} length={28} />}</td>
      </tr>
    </>
  );
};

TableRow.propTypes = {
  item: PropTypes.object.isRequired,
  num: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};
