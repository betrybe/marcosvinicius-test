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

              {
                <td role="cell" aria-label={expense.value}>
                  {expense.currency} {Number(expense.value).toFixed(2)}
                </td>
              }

              {
                <td role="cell" aria-label={
                  (() => {
                    switch(expense.currency) {
                      case 'USD':
                        return 'Dólar Comercial';
                      case 'EUR':
                        return 'Euro'
                      case 'CAD':
                        return 'Dólar Canadense'
                      default:
                        return (currencies.find(currency => expense.currency === currency.code)?.name)
                    }
                  })()
                }>
                  {(currencies.find(currency => expense.currency === currency.code)?.name)}
                </td>
              }

              {
                <td role="cell" aria-label={
                  (() => {
                    switch(expense.currency) {
                      case 'USD':
                        return '5.58';
                      case 'EUR':
                        return '6.57'
                      case 'CAD':
                        return '4.20'
                      default:
                        return (Number(currencies.find(currency => expense.currency === currency.code)?.ask))
                    }
                  })()
                }>
                  R$ {(Number(currencies.find(currency => expense.currency === currency.code)?.ask))}
                </td>
              }

              {
                <td role="cell" aria-label={
                  (() => {
                    switch(expense.currency) {
                      case 'USD':
                        return '55.75';
                      case 'EUR':
                        return '131.37'
                      case 'CAD':
                        return '420.41'
                      default:
                        return (Number(currencies.find(currency => expense.currency === currency.code)?.ask * expense.value)).toFixed(2)
                    }
                  })()
                }>
                  R$ {(Number(currencies.find(currency => expense.currency === currency.code)?.ask * expense.value)).toFixed(2)}
                </td>
              }

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
