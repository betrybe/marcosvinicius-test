import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pushCurrenciesToWallet } from '../../actions/wallet'

import api from '../../services/api';

import Header from '../../components/Header'
import Table from '../../components/Table'
import Form from '../../components/Form'

function Wallet() {
  const [codes, setCodes] = useState([]);

  const dispatch = useDispatch();
  const { email } = useSelector(state => state.user);
  const { totalValue, currencies } = useSelector(state => state.wallet);

  useEffect(() => {
    api.get('/').then(currency => {
      const result = currency.data
      dispatch(pushCurrenciesToWallet(Object.values(result)));
    })
  }, [dispatch]);

  useEffect(() => {
    const codes = currencies.map(currency => currency.code);
    setCodes(codes);
  }, [currencies]);

  return (
    <>
      <Header email={email} totalValue={totalValue} />
      <Form
        codes={codes}
        methods={[
          "Dinheiro",
          "Cartão de crédito",
          "Cartão de débito",
        ]}
        tags={[
          "Alimentação",
          "Lazer",
          "Trabalho",
          "Transporte",
          "Saúde",
        ]}
      />
      <Table />
    </>
  );
}

export default Wallet;
