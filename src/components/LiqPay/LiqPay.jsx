import { useState, useEffect } from 'react';
import { makeValues } from '../../helpers/liqpay';
import { DivStyled } from './LiqPay.styled';

export const LiqPay = () => {
  const [amount, setAmount] = useState(100);
  const [description, setDescription] = useState('Ogoloshennia');
  const [dataBase64, setDataBase64] = useState('');
  const [signatureBase64, setSignatureBase64] = useState('');
  const [statusPayment, setStatusPayment] = useState(false);
  const [resultPayment, setResultPayment] = useState(false);
  // const [isOpenWindow, setisOpenWindow] = useState(false);

  useEffect(() => {
    if (amount === '' && description === '') {
      return;
    }
    const fu = async () => {
      const { dataBase64, signatureBase64 } = await makeValues(
        amount,
        description
      );
      setDataBase64(dataBase64);
      setSignatureBase64(signatureBase64);
    };
    fu();
  }, [amount, description]);

  const pay = () => {
    // setisOpenWindow(true);
    const SCRIPT_URL = 'https://static.liqpay.ua/libjs/checkout.js';
    const container = document.body || document.head;
    const script = document.createElement('script');
    script.src = SCRIPT_URL;
    script.onload = () => {
      // eslint-disable-next-line no-undef
      LiqPayCheckout.init({
        data: dataBase64,
        signature: signatureBase64,
        embedTo: '#liqpay_checkout',
        language: 'uk',
        mode: 'embed', // embed || popup
      })
        .on('liqpay.callback', function (data) {
          console.log('status ', data.status);
          setStatusPayment(prev => data.status);
          setResultPayment(prev => data);
        })
        .on('liqpay.ready', function (data) {
          console.log(data);
          // ready
        })
        .on('liqpay.close', function (data) {
          console.log(data);
          // close
        });
    };
    container.appendChild(script);
    setAmount('');
    setDescription('');
    setDataBase64('');
    setSignatureBase64('');
  };

  return (
    <DivStyled>
      <button onClick={pay} type="button">
        Сплатити
      </button>

      {/* {isOpenWindow && ( */}
      <div id="liqpay_checkout"></div>
      {/* )} */}
    </DivStyled>
  );
};
