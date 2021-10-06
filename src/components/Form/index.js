import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToWallet, updateItemToWallet, calculeTotalValue } from '../../actions/wallet';
import api from '../../services/api';

import { Container } from './styles';

function Form({ codes, tags, methods }) {
  const [valor, setValor] = useState('');
  const [code, setCode] = useState('USD');
  const [descricao, setDescricao] = useState('');
  const [tag, setTag] = useState('Alimentação');
  const [metodoPagamento, setMetodoPagamento] = useState('Dinheiro');

  const { isUpdated, expenses, expenseId } = useSelector(state => state.wallet);
  const dispatch = useDispatch();

  const clearFields = useCallback(() => {
    setValor(0);
    setDescricao('');
  }, []);

  const handleAddItem = useCallback(async () => {
    const { data } = await api.get('/')
    const payload = {
      value: valor,
      description: descricao,
      currency: code,
      method: metodoPagamento,
      tag,
      exchangeRates: data
    }
    dispatch(
      addItemToWallet(payload),
    );
    dispatch(calculeTotalValue(null, payload))
    clearFields()
  }, [valor, code, descricao, tag, metodoPagamento, dispatch, clearFields])

  const handleUpdate = useCallback((id) => {
    const expense = expenses?.find(exp => exp.id === id)
    const payload = {
      value: valor,
      description: descricao,
      currency: code,
      method: metodoPagamento,
      tag,
      exchangeRates: expense?.exchangeRates
    }
    expense && (
      dispatch(
        updateItemToWallet(id, payload)
      )
    );

    expense && (
      dispatch(calculeTotalValue(null, payload))
    )
  }, [dispatch, expenses, valor, code, descricao, tag, metodoPagamento]);

  return (
    <Container isUpdate={isUpdated}>
        <div className="block">
          <label htmlFor="valor">valor: </label>
          <input
            role="textbox"
            aria-label="valor"
            data-testid="value-input"
            className="valor"
            type="number"
            value={valor}
            onChange={e => setValor(e.target.value)}
          />
        </div>

        <div className="block">
          <label htmlFor="code">code: </label>
          <select aria-label="moeda" data-testid="currency-input" onChange={e => setCode(e.target.value)}>
            {codes?.length > 0 ? (
              codes.map(code => (
                <option value={code} key={code}>{code}</option>
              ))
            ) : (
              [
                'USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC',
                'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP',
              ].map(code => (
                <option value={code} key={code}>{code}</option>
              ))
            )}
          </select>
        </div>

        <div className="block">
          <label htmlFor="Método">método de pagamento: </label>
          <select aria-label="método de pagamento" data-testid="method-input" onChange={e => setMetodoPagamento(e.target.value)}>
          {methods.map(method => (
            <option key={method} value={method}>{method}</option>
          ))
          }
          </select>
        </div>

        <div className="block">
          <label htmlFor="Tag">tag: </label>
          <select aria-label="tag" data-testid="tag-input" onChange={e => setTag(e.target.value)}>
            {tags.map(tag => (
               <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>

        <div className="block">
          <label htmlFor="descrição">descrição: </label>
          <input
            role="textbox"
            type="text"
            data-testid="description-input"
            area-label="descrição"
            value={descricao}
            className="descricao"
            onChange={e => setDescricao(e.target.value)}
          />
        </div>

        <div className="block">
          <button type="button" onClick={
            isUpdated
            ?
              () => handleUpdate(expenseId)
            :
              () => handleAddItem()
          }>
            {isUpdated ? 'Editar despesa' : 'Adicionar despesa'}
          </button>
        </div>
      </Container>
  );
}

export default Form;
