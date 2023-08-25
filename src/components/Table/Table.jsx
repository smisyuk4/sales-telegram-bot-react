import { useState, useEffect } from 'react';
import { getDataByFilter } from '../../firebase/services';
import { Filter } from './Filter';
import { TableRow } from './TableRow';
import { Modal } from '../Modal';
import { Details } from './Details';

import { TableStyled } from './Table.styled';

export const Table = () => {
  const [typeAdvertisement, setTypeAdvertisement] = useState('all');
  const [data, setData] = useState([]);
  const [isOpenDetails, setIsOpenDetails] = useState(false);

  useEffect(() => {
    const get = async () => {
      const result = await getDataByFilter(typeAdvertisement);
      const reversResult = result.reverse();

      setData(prev => reversResult);
    };

    get();
  }, [typeAdvertisement]);

  const toggleModal = () => {
    document.body.classList.remove('no-scroll');
    setIsOpenDetails(prev => !prev);
  };

  const openModal = data => {
    console.log(data);
    toggleModal();
  };

  // console.log('data ', data);
  return (
    <>
      {isOpenDetails && (
        <Modal toggleModal={toggleModal}>
          <Details />
        </Modal>
      )}
      <div>
        <Filter setTypeAdvertisement={setTypeAdvertisement} />
        {data && (
          <TableStyled>
            <thead>
              <tr>
                <th className="number">№</th>
                <th className="date">Дата</th>
                <th className="user">Клієнт</th>
                <th className="title">Заголовок</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <TableRow
                  key={index}
                  item={item}
                  num={index + 1}
                  openModal={openModal}
                />
              ))}
            </tbody>
          </TableStyled>
        )}
      </div>
    </>
  );
};
