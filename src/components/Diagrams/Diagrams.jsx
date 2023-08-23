import { useEffect, useState, useRef } from 'react';
import * as echarts from 'echarts';
import {
  getCountAdvertisement,
  getCountSubscribers,
} from '../../firebase/services';

import { SubscribersForm } from '../SubscribersForm/SubscribersForm';

import { DivStyled, DiagramStyled } from './Diagrams.styled';

export const Diagrams = () => {
  const [saleCount, setSaleCount] = useState(0);
  const [buyCount, setBuyCount] = useState(0);
  const [subscribersCount, setSubscribersCount] = useState(0);
  const chartTypeRef = useRef(null);
  const chartSubscribersRef = useRef(null);

  useEffect(() => {
    const get = async () => {
      const resultSale = await getCountAdvertisement('sale');
      setSaleCount(prev => resultSale);

      const resultBuy = await getCountAdvertisement('buy');
      setBuyCount(prev => resultBuy);

      const resultSubscribers = await getCountSubscribers();
      setSubscribersCount(prev => resultSubscribers);
    };

    get();
  }, []);

  useEffect(() => {
    if (saleCount == 0 && buyCount === 0) {
      return;
    }

    const chartType = echarts.init(chartTypeRef.current);

    const options = {
      title: {
        text: 'Оголошення в каналі',
        subtext: `Всього ${saleCount + buyCount} шт`,
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: saleCount, name: `Продаж ${saleCount} шт` },
            { value: buyCount, name: `Купівля ${buyCount} шт` },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    chartType.setOption(options);
  }, [saleCount, buyCount]);

  useEffect(() => {
    if (subscribersCount === 0) {
      return;
    }

    const chartSubscribers = echarts.init(chartSubscribersRef.current);

    const options = {
      title: {
        text: 'Підписники в каналі',
        subtext: `Всього ${subscribersCount.signedUp} шт`,
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            {
              value: subscribersCount.signedUp,
              name: `Залишились ${subscribersCount.remains} шт`,
            },
            {
              value: subscribersCount.signedUp - subscribersCount.remains,
              name: `Пішли ${
                subscribersCount.signedUp - subscribersCount.remains
              } шт`,
            },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    chartSubscribers.setOption(options);
  }, [subscribersCount]);

  return (
    <DivStyled>
      <DiagramStyled ref={chartTypeRef} />
      <SubscribersForm />
      <DiagramStyled ref={chartSubscribersRef} />
    </DivStyled>
  );
};
