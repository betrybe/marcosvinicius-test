import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../services/api';

import { distinct } from '../../utils/distinct';
import Header from '../../components/Header'

import { Container } from './styles';

function Wallet() {
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

      const currenciesFiltred = currencies.filter(distinct);
      setMoedas(currenciesFiltred);
    })
  }, [])

  return (
    <>
      <Header email={email} totalValue={0} />
      <Container>
        <label htmlFor="Valor">Valor: </label>
        <input type="number" />

        <label htmlFor="Moeda">Moeda: </label>
        <select name="" id="">
          { moedas.map(m => (
            <option key={m}>{m}</option>
          )) }
        </select>

        <label htmlFor="Método">Método de pagamento: </label>
        <select name="" id="">
          <option value="">Dinheiro</option>
          <option value="">Cartão de crédito</option>
          <option value="">Cartão de débito</option>
        </select>

        <label htmlFor="Tag">Tag: </label>
        <select name="" id="">
          <option value="">Alimentação</option>
          <option value="">Lazer</option>
          <option value="">Trabalho</option>
          <option value="">Transporte</option>
          <option value="">Saúde</option>
        </select>

        <label htmlFor="Descrição">Descrição: </label>
        <input type="text" />

        <button type="button" onClick={() => {}}>
          Adicionar despesa
        </button>
      </Container>
    </>
  );
}

export default Wallet;
