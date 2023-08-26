import { useEffect, useState, useRef } from 'react';
import * as echarts from 'echarts';
import {
  getCountAdvertisement,
  getCountSubscribersBot,
  updateCountSubscribers,
} from '../../firebase/services';
import { subscribersApi } from '../../salesApi';

import { DivStyled, DiagramStyled } from './Diagrams.styled';

export const Diagrams = () => {
  const [saleCount, setSaleCount] = useState(0);
  const [buyCount, setBuyCount] = useState(0);
  const [subscribersCountBot, setSubscribersCountBot] = useState(0);
  const [subscribersCount, setSubscribersCount] = useState(0);
  const chartTypeRef = useRef(null);
  const chartSubscribersRef = useRef(null);

  useEffect(() => {
    const get = async () => {
      const resultSale = await getCountAdvertisement('sale');
      setSaleCount(prev => resultSale);

      const resultBuy = await getCountAdvertisement('buy');
      setBuyCount(prev => resultBuy);

      const { count } = await subscribersApi('/count-members-chat');
      setSubscribersCount(prev => count);
      await updateCountSubscribers(count);

      const resultSubscribersBot = await getCountSubscribersBot();
      setSubscribersCountBot(prev => resultSubscribersBot);
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
        textStyle: {
          color: '#000',
        },
        subtext: `Всього ${saleCount + buyCount} шт`,
        subtextStyle: {
          color: '#000',
        },
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        show: false,
        // orient: 'vertical',
        // left: 'left',
      },
      series: [
        {
          name: 'Оголошення',
          type: 'pie',
          radius: '75%',
          color: ['#FFD700', '#0057B8'],
          data: [
            { value: saleCount, name: `Продаж ${saleCount} шт` },
            {
              value: buyCount,
              name: `Купівля ${buyCount} шт`,
            },
          ],
          label: {
            position: 'inside',
            fontWeight: 'bold',
          },
        },
      ],
    };

    chartType.setOption(options);
  }, [saleCount, buyCount]);

  useEffect(() => {
    if (subscribersCount === 0 && subscribersCountBot === 0) {
      return;
    }

    const difference = subscribersCount - subscribersCountBot;
    const chartSubscribers = echarts.init(chartSubscribersRef.current);

    const options = {
      title: {
        text: 'Підписники в каналі',
        subtext: `Всього ${subscribersCount} шт`,
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        show: false,
      },
      series: [
        {
          name: 'Підписники',
          type: 'pie',
          radius: '75%',
          color: ['#70e832', '#ff2f2f'],
          data: [
            {
              value: subscribersCountBot,
              name: `Встановили бота ${subscribersCountBot} шт`,
            },
            {
              value: difference,
              name: `Без бота ${difference} шт`,
            },
          ],
          label: {
            position: 'inside',
            fontWeight: 'bold',
          },
        },
      ],
    };

    chartSubscribers.setOption(options);
  }, [subscribersCount, subscribersCountBot]);

  return (
    <DivStyled>
      <DiagramStyled ref={chartTypeRef} />
      <DiagramStyled ref={chartSubscribersRef} />
    </DivStyled>
  );
};

// https://echarts.apache.org/en/option.html#legend.show
