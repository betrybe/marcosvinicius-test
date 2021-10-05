import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pushCurrenciesToWallet } from '../../actions/wallet'

import api from '../../services/api';
import { distinct } from '../../utils/distinct';

import Header from '../../components/Header'
import Table from '../../components/Table'
import Form from '../../components/Form'

function Wallet() {
  const [codes, setCodes] = useState([])

  const dispatch = useDispatch();
  const { email } = useSelector(state => state.user);
  const { totalValue } = useSelector(state => state.wallet);

  useEffect(() => {
    api.get('/').then(currency => {
      const result = currency.data
      const currencies = []
      for(let item of Object.entries(result)) {
        const { code } = item[1]
        currencies.push(code);
      }
      const currenciesNotDuplicated = currencies.filter(distinct);
      const currenciesFiltred = currenciesNotDuplicated.filter(item => item !== 'USDT');

      setCodes(currenciesFiltred);
      dispatch(pushCurrenciesToWallet(Object.values(result)));
    })
  }, [dispatch])

  return (
    <>
      <Header email={email} totalValue={totalValue} />
      <Form
        codes={codes}
        methods={[
          "Dinheiro",
          "Cartão de crédito",
          "Cartão de débito",
        ]}
        tags={[
          "alimentação",
          "lazer",
          "trabalho",
          "transporte",
          "saúde",
        ]}
      />
      <Table />
    </>
  );
}

export default Wallet;
