import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemToWallet, requestUpdateItemToWallet, pushCurrenciesToWallet, calculeTotalValue } from '../../actions/wallet';

import { Container, Thead, Tbody } from './styles';

const Table = () => {
  const { expenses, currencies } = useSelector(state => state.wallet);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      pushCurrenciesToWallet()
    );
  }, [dispatch, expenses]);

  const handleDelete = useCallback((id) => {
    dispatch(
      removeItemToWallet(id)
    );
    dispatch(
      calculeTotalValue(id, null)
    )
  }, [dispatch]);

  const handleRequestUpdate = useCallback((id) => {
    dispatch(
      requestUpdateItemToWallet(id)
    )
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
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.currency} {Number(expense.value).toFixed(2)}</td>
              <td>{currencies.find(currency => expense.currency === currency.code)?.currencyName}</td>
              <td>R$ {(Number(currencies.find(currency => expense.currency === currency.code)?.info.ask))?.toFixed(2)}</td>
              <td>R$ {(Number(currencies.find(currency => expense.currency === currency.code)?.info.ask * expense.value))?.toFixed(2)}</td>
              <td>Real Brasileiro</td>
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
