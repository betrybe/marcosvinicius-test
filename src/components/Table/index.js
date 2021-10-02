import React, { useState, useEffect, useCallback } from 'react';
// import {  } from 'react-icons';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemToWallet } from '../../actions/wallet';

import { Container, Thead, Tbody } from './styles';

const Table = () => {
  const [currencies, setCurrencies] = useState([]);

  const dispatch = useDispatch();
  const { expenses: despesas } = useSelector(state => state.wallet);

  useEffect(() => {
    for (const despesa of despesas) {
      for (const [_, value] of Object.entries(despesa.exchangeRates)) {
        if (despesa.currency === value.code) {
          setCurrencies([...currencies, {
            key: despesa.currency,
            name: value.name,
            info: value,
          }])
          break
        }
      }
    }
  }, [despesas]);

  const handleDelete = useCallback((id) => {
    dispatch(
      removeItemToWallet(id)
    )
  }, [])

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
          despesas.map(despesa => (
            <tr key={despesa.id}>
              <td>{despesa.description}</td>
              <td>{despesa.tag}</td>
              <td>{despesa.method}</td>
              <td>{despesa.currency} {Number(despesa.value).toFixed(2)}</td>
              <td>{currencies.find(item => despesa.currency === item.key)?.name}</td>
              <td>R$ {(Number(currencies.find(item => despesa.currency === item.key)?.info.ask)).toFixed(2)}</td>
              <td>R$ {(Number(currencies.find(item => despesa.currency === item.key)?.info.ask * despesa.value)).toFixed(2)}</td>
              <td>Real Brasileiro</td>
              <td>
                <div>
                  <button type="button" data-testid="delete-btn" onClick={ () => handleDelete(despesa.id) }>
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
