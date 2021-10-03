import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToWallet, updateItemToWallet } from '../../actions/wallet';
import api from '../../services/api';

import { Container } from './styles';

function Form({ codes, tags, methods }) {
  const [valor, setValor] = useState(0);
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
      addItemToWallet(payload)
    );
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
      dispatch(updateItemToWallet(id, payload))
    );
  }, [dispatch, expenses, valor, code, descricao, tag, metodoPagamento])

  return (
    <Container isUpdate={isUpdated}>
        <div className="block">
          <label htmlFor="Valor">valor: </label>
          <input
            className="valor"
            type="number"
            onChange={e => setValor(e.target.value)}
            value={valor}
          />
        </div>

        <div className="block">
          <label htmlFor="code">code: </label>
          <select onChange={e => setCode(e.target.value)}>
            { codes.map(code => (
              <option value={code} key={code}>{code}</option>
            )) }
          </select>
        </div>

        <div className="block">
          <label htmlFor="Método">método de pagamento: </label>
          <select onChange={e => setMetodoPagamento(e.target.value)}>
          {methods.map(method => (
            <option key={method} value={method}>{method}</option>
          ))
          }
            {/* <option value="Dinheiro">dinheiro</option>
            <option value="Cartão de crédito">cartão de crédito</option>
            <option value="Cartão de débito">cartão de débito</option> */}
          </select>
        </div>

        <div className="block">
          <label htmlFor="Tag">tag: </label>
          <select onChange={e => setTag(e.target.value)}>
            {tags.map(tag => (
               <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>

        <div className="block">
          <label htmlFor="Descrição">descrição: </label>
          <input
            className="descricao"
            type="text"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />
        </div>

        <div className="block">
          <button type="button" isUpdate={isUpdated} onClick={
            isUpdated
            ?
              () => handleUpdate(expenseId)
            :
              () => handleAddItem()
          }>
            {isUpdated ? 'Editar Gasto' : 'Adicionar despesa'}
          </button>
        </div>

        {/* {isUpdated ? (
          <div className="block">
            <button type="button" onClick={ () => handleUpdate(expenseId) }>
            Editar Gasto
          </button>
          </div>
        ) : (
          <div className="block">
            <button type="button" onClick={ () => handleAddItem() }>
              Adicionar despesa
            </button>
          </div>
        )} */}
      </Container>
  );
}

export default Form;
