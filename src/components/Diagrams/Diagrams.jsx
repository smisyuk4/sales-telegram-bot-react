import { useEffect, useState } from 'react';
import { getCountAdvertisement } from '../../firebase/services';

import { DivStyled } from './Diagrams.styled';

export const Diagrams = () => {
  const [saleCount, setSaleCount] = useState(0);
  const [buyCount, setBuyCount] = useState(0);

  useEffect(() => {
    const get = async () => {
      const resultSale = await getCountAdvertisement('sale');
      setSaleCount(prev => resultSale);
      console.log('resultSale:  ', resultSale);

      const resultBuy = await getCountAdvertisement('buy');
      setBuyCount(prev => resultBuy);
      console.log('resultBuy:  ', resultBuy);
    };

    get();
  }, []);

  return (
    <DivStyled>
      <div>
        <p>Всього підписалось користувачів: 100500</p>
        <p>Кількість оголошень "Продай": {saleCount}</p>
        <p>Кількість оголошень "Купи": {buyCount}</p>
      </div>
    </DivStyled>
  );
};
