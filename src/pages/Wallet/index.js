import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pushCurrenciesToWallet } from '../../actions/wallet'
import { distinct } from '../../utils/distinct'

import Header from '../../components/Header'
import Table from '../../components/Table'
import Form from '../../components/Form'

function Wallet() {
  const [codes, setCodes] = useState([
    'USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC',
    'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP'
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getDataApi = async () => {
      try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/all');
        if (!response.ok) {
          throw new Error()
        }
        const data = await response.json();
        return data;

      } catch {
        console.log('falha ao chamar api')
      }
    }

    getDataApi().then(currencies => {
      const info = Object.values(currencies);
      const codes = info.map(item => item.code);
      const codesFiltred = codes.filter(distinct);
      setCodes(codesFiltred);
      dispatch(pushCurrenciesToWallet(Object.values(currencies)));
    })
  }, [dispatch]);

  return (
    <>
      <Header />
      <Form
        codes={codes}
        methods={[
          "Dinheiro",
          "Cartão de crédito",
          "Cartão de débito",
        ]}
        tags={[
          "Alimentação",
          "Lazer",
          "Trabalho",
          "Transporte",
          "Saúde",
        ]}
      />
      <Table />
    </>
  );
}

export default Wallet;
