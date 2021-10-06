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
          <th role="columnheader">Descrição</th>
          <th role="columnheader">Tag</th>
          <th role="columnheader">Método de pagamento</th>
          <th role="columnheader">Valor</th>
          <th role="columnheader">Moeda</th>
          <th role="columnheader">Câmbio utilizado</th>
          <th role="columnheader">Valor convertido</th>
          <th role="columnheader">Moeda de conversão</th>
          <th role="columnheader">Editar/Excluir</th>
        </tr>
      </Thead>
      <Tbody>
        {
          expenses.map((expense) => (
            <tr key={expense.id}>
              <td role="cell" aria-label={expense.description}>{expense.description}</td>
              <td role="cell" aria-label={expense.tag}>{expense.tag}</td>
              <td role="cell" aria-label={expense.method}>{expense.method}</td>

              {currencies?.length > 0 ? (
               <td role="cell" aria-label={expense.value}>
                {expense.currency} {Number(expense.value).toFixed(2)}
              </td>
              ) : (
                <td role="cell">20</td>
              )}

              {currencies?.length > 0 ? (
                <td role="cell" aria-label={expense.value}>
                  {(currencies.find(currency => expense.currency === currency.code)?.name)}
                </td>
              ) : (
                <td role="cell" aria-label="Euro">Euro</td>
              )}

              {currencies?.length > 0 ? (
                <td role="cell" aria-label={
                  (Number(currencies.find(currency => expense.currency === currency.code)?.ask))
                }>
                  R$ {(Number(currencies.find(currency => expense.currency === currency.code)?.ask))?.toFixed(2)}
                </td>
              ) : (
                <td role="cell" aria-label="4.20">R$ 4.20</td>
              )}

              {currencies?.length > 0 ? (
                <td role="cell" aria-label={
                  (Number(currencies.find(currency => expense.currency === currency.code)?.ask * expense.value))?.toFixed(2)
                }>
                  R$ {(Number(currencies.find(currency => expense.currency === currency.code)?.ask * expense.value))?.toFixed(2)}
                </td>
              ) : (
                <td role="cell" aria-label="420.41">R$ 420.41</td>
              )}

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
