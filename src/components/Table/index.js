import React, { useState, useEffect, useCallback } from 'react';
// import {  } from 'react-icons';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemToWallet } from '../../actions/wallet';

import { Container, Thead, Tbody } from './styles';

const Table = () => {
  const [currencies, setCurrencies] = useState([]);

  const dispatch = useDispatch();
  const { expenses } = useSelector(state => state.wallet);

  useEffect(() => {
    for (const expense of expenses) {
      for (const [_, value] of Object.entries(expense.exchangeRates)) {
        if (expense.currency === value.code) {
          setCurrencies([...currencies, {
            key: expense.currency,
            name: value.name,
            info: value,
          }])
          break
        }
      }
    }
  }, [expenses]);

  const handleDelete = useCallback((id) => {
    dispatch(
      removeItemToWallet(id)
    )
  }, [expenses])

  return (
    <Container>
      <Thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de Pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio Utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </Thead>
      <Tbody>
        {
          expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.currency} {Number(expense.value).toFixed(2)}</td>
              <td>{currencies.find(item => expense.currency === item.key)?.name}</td>
              <td>R$ {(Number(currencies.find(item => expense.currency === item.key)?.info.ask))?.toFixed(2)}</td>
              <td>R$ {(Number(currencies.find(item => expense.currency === item.key)?.info.ask * expense.value))?.toFixed(2)}</td>
              <td>Real Brasileiro</td>
              <td>
                <div>
                  <button type="button" data-testid="delete-btn" onClick={ () => handleDelete(expense.id) }>
                    {/* <FaTrash size={22} /> */}
                    deletar
                  </button>
                  <button type="button" data-testid="edit-btn">
                    {/* <FaEdit size={22} /> */}
                    editar
                  </button>
                </div>
              </td>
            </tr>
          ))
        }
      </Tbody>
    </Container>
  );
}

export default Table;
