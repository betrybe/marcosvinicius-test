import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addItemToWallet } from '../../actions/wallet';
import api from '../../services/api';

import { distinct } from '../../utils/distinct';
import Header from '../../components/Header'
import Table from '../../components/Table'

import { Container } from './styles';

function Wallet() {
  const [total, setTotal] = useState(0)
  const [moedas, setMoedas] = useState([])
  const [valor, setValor] = useState(0)
  const [moeda, setMoeda] = useState('USD')
  const [descricao, setDescricao] = useState('')
  const [tag, setTag] = useState('Alimentação')
  const [metodoPagamento, setMetodoPagamento] = useState('Dinheiro')

  const dispatch = useDispatch();
  const { email } = useSelector(state => state.user);
  const { expenses } = useSelector(state => state.wallet);

  const clearFields = useCallback(() => {
    setValor(0)
    setDescricao('')
  }, [valor, descricao])

  const handleAddItem = useCallback(async () => {
    const { data } = await api.get('/')
    const payload = {
      id: expenses.length === 0 ? 0 : expenses.length + 1,
      value: valor,
      description: descricao,
      currency: moeda,
      method: metodoPagamento,
      tag,
      exchangeRates: data
    }
    dispatch(
      addItemToWallet(payload)
    );
    clearFields()
  }, [valor, moeda, descricao, tag, metodoPagamento])

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
        <input
          type="number"
          onChange={e => setValor(e.target.value)}
          value={valor}
        />

        <label htmlFor="Moeda">moeda: </label>
        <select onChange={e => setMoeda(e.target.value)}>
          { moedas.map(m => (
            <option value={m} key={m}>{m}</option>
          )) }
        </select>

        <label htmlFor="Método">método de pagamento: </label>
        <select onChange={e => setMetodoPagamento(e.target.value)}>
          <option value="Dinheiro">dinheiro</option>
          <option value="Cartão de crédito">cartão de crédito</option>
          <option value="Cartão de débito">cartão de débito</option>
        </select>

        <label htmlFor="Tag">tag: </label>
        <select name="" id="" onChange={e => setTag(e.target.value)}>
          <option value="Alimentação">alimentação</option>
          <option value="Lazer">lazer</option>
          <option value="Trabalho">trabalho</option>
          <option value="Transporte">transporte</option>
          <option value="Saúde">saúde</option>
        </select>

        <label htmlFor="Descrição">descrição: </label>
        <input
          type="text"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
        />

        <button type="button" onClick={ handleAddItem }>
          Adicionar despesa
        </button>
      </Container>

      <Table />
    </>
  );
}

export default Wallet;
