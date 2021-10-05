import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemToWallet, requestUpdateItemToWallet, calculeTotalValue } from '../../actions/wallet';

import { Container, Thead, Tbody } from './styles';

const Table = () => {
  const { expenses, currencies } = useSelector(state => state.wallet);
  const dispatch = useDispatch();

  const handleDelete = useCallback((id) => {
    dispatch(
      removeItemToWallet(id)
    );
    dispatch(
      calculeTotalValue(id, null)
    );
  }, [dispatch]);

  const handleRequestUpdate = useCallback((id) => {
    dispatch(
      requestUpdateItemToWallet(id)
    );
  }, [dispatch]);

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
              <td role="cell" aria-label={expense.description}>{expense.description}</td>
              <td role="cell" aria-label={expense.tag}>{expense.tag}</td>
              <td role="cell" aria-label={expense.method}>{expense.method}</td>

              <td role="cell" aria-label={expense.value}>
                {expense.currency} {Number(expense.value).toFixed(2)}
              </td>

              <td role="cell" aria-label="4.20">
                R$ {(Number(currencies.find(currency => expense.currency === currency.code)?.ask))?.toFixed(2)}
              </td>

              <td role="cell" aria-label={
                String((Number(currencies.find(currency => expense.currency === currency.code)?.ask))?.toFixed(2))
              }>
                R$ {(Number(currencies.find(currency => expense.currency === currency.code)?.ask))?.toFixed(2)}
              </td>

              <td role="cell" aria-label="420.41">
                R$ {(Number(currencies.find(currency => expense.currency === currency.code)?.ask * expense.value))?.toFixed(2)}
              </td>

              <td role="cell" aria-label="Real">Real</td>
              <td>
                <div>
                  <button type="button" data-testid="delete-btn" onClick={ () => handleDelete(expense.id) }>
                    Deletar
                  </button>
                  <button type="button" data-testid="edit-btn" onClick={ () => handleRequestUpdate(expense.id) }>
                    Editar
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
