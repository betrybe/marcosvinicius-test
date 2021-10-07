import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addItemToWallet,
  updateItemToWallet,
  calculeTotalValue,
} from '../../actions/wallet';

import './form.css';

function Form({ codes, tags, methods }) {
  const [valor, setValor] = useState('');
  const [code, setCode] = useState('USD');
  const [descricao, setDescricao] = useState('');
  const [tag, setTag] = useState('Alimentação');
  const [metodoPagamento, setMetodoPagamento] = useState('Dinheiro');

  const { isUpdated, expenses, expenseId } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  const clearFields = useCallback(() => {
    setValor(0);
    setDescricao('');
  }, []);

  const handleAddItem = useCallback(async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const payload = {
      value: valor,
      description: descricao,
      currency: code,
      method: metodoPagamento,
      tag,
      exchangeRates: data,
    };
    dispatch(
      addItemToWallet(payload),
    );
    dispatch(calculeTotalValue(null, payload));
    clearFields();
  }, [valor, code, descricao, tag, metodoPagamento, dispatch, clearFields]);

  const handleUpdate = useCallback((id) => {
    const expense = expenses.find((exp) => exp.id === id);
    const payload = {
      value: valor,
      description: descricao,
      currency: code,
      method: metodoPagamento,
      tag,
      exchangeRates: expense.exchangeRates,
    };
    expense && (
      dispatch(
        updateItemToWallet(id, payload),
      )
    );

    expense && (
      dispatch(calculeTotalValue(null, payload))
    );
  }, [dispatch, expenses, valor, code, descricao, tag, metodoPagamento]);

  return (
    <form
      className="form-trybe"
      style={
        isUpdated
          ? { background: '#3FB589' }
          : { background: '#2E2E2E' }
      }
    >
      <div className="block">
        <label htmlFor="valor">valor: </label>
        <input
          aria-label="valor"
          data-testid="value-input"
          className="valor"
          type="number"
          value={ valor }
          onChange={ (e) => setValor(e.target.value) }
        />
      </div>

      <div className="block">
        <label htmlFor="code">code: </label>
        <select
          aria-label="moeda"
          data-testid="currency-input"
          onChange={ (e) => setCode(e.target.value) }
        >
          {codes.map((codeItem) => (
            <option key={ codeItem } value={ codeItem }>{codeItem}</option>
          ))}
        </select>
      </div>

      <div className="block">
        <label htmlFor="Método">método de pagamento: </label>
        <select
          aria-label="método de pagamento"
          data-testid="method-input"
          onChange={ (e) => setMetodoPagamento(e.target.value) }
        >
          {
            methods.map((method) => (
              <option key={ method } value={ method }>{method}</option>
            ))
          }
        </select>
      </div>

      <div className="block">
        <label htmlFor="Tag">tag: </label>
        <select
          aria-label="tag"
          data-testid="tag-input"
          onChange={ (e) => setTag(e.target.value) }
        >
          {tags.map((tagItem) => (
            <option key={ tagItem } value={ tagItem }>{tagItem}</option>
          ))}
        </select>
      </div>

      <div className="block">
        <label htmlFor="descrição">descrição: </label>
        <input
          type="text"
          data-testid="description-input"
          aria-label="descrição"
          value={ descricao }
          className="descricao"
          onChange={ (e) => setDescricao(e.target.value) }
        />
      </div>

      <div className="block">
        <button
          type="button"
          style={
            isUpdated
              ? { background: '#252525' }
              : { background: '#3FB589' }
          }
          onClick={
            isUpdated
              ? () => handleUpdate(expenseId)
              : () => handleAddItem()
          }
        >
          {isUpdated ? 'Editar despesa' : 'Adicionar despesa'}
        </button>
      </div>
    </form>
  );
}

export default Form;
