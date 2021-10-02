import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../services/api';

import { distinct } from '../../utils/distinct';
import Header from '../../components/Header'

import { Container } from './styles';

function Wallet() {
  const [total, setTotal] = useState(0)
  const [moedas, setMoedas] = useState([])
  const { email } = useSelector(state => state.user);

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
      setMoedas(currenciesFiltred);
    })
  }, [])

  return (
    <>
      <Header email={email} totalValue={total} />
      <Container>
        <label htmlFor="Valor">valor: </label>
        <input type="number" />

        <label htmlFor="Moeda">moeda: </label>
        <select name="" id="">
          { moedas.map(m => (
            <option key={m}>{m}</option>
          )) }
        </select>

        <label htmlFor="Método">método de pagamento: </label>
        <select name="" id="">
          <option value="">dinheiro</option>
          <option value="">cartão de crédito</option>
          <option value="">cartão de débito</option>
        </select>

        <label htmlFor="Tag">tag: </label>
        <select name="" id="">
          <option value="">alimentação</option>
          <option value="">lazer</option>
          <option value="">trabalho</option>
          <option value="">transporte</option>
          <option value="">saúde</option>
        </select>

        <label htmlFor="Descrição">descrição: </label>
        <input type="text" />

        <button type="button" onClick={() => {}}>
          Adicionar despesa
        </button>
      </Container>
    </>
  );
}

export default Wallet;
