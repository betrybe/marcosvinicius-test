import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import api from '../../services/api';
import { distinct } from '../../utils/distinct';

import Header from '../../components/Header'
import Table from '../../components/Table'
import Form from '../../components/Form'

function Wallet() {
  const [codes, setCodes] = useState([])
  const [total, setTotal] = useState(0);

  const { email } = useSelector(state => state.user);
  const { expenses } = useSelector(state => state.wallet);

  useEffect(() => {
    api.get('/').then(currency => {
      const result = currency.data
      const currencies = []
      for(let item of Object.entries(result)) {
        const { code } = item[1]
        currencies.push(code);
      }
      const currenciesNotDuplicated = currencies.filter(distinct);
      const currenciesFiltred = currenciesNotDuplicated.filter(item => item !== 'USDT')
      setCodes(currenciesFiltred);
    })
  }, [])

  useEffect(() => {
    const total = expenses.reduce((previousValue, currentValue, index, array) => {
      const { value } = currentValue
      return Number(value) + previousValue
    }, 0)
    setTotal(total);
  }, [expenses])

  return (
    <>
      <Header email={email} totalValue={total} />
      <Form
        codes={codes}
        tags={[
          "Dinheiro",
          "Cartão de crédito",
          "Cartão de débito",
        ]}
        methods={[
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
