import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header'

// import { Container } from './styles';

function Wallet() {
  const { email } = useSelector(state => state.user);

  return (
    <Header email={email} totalValue={0} />
  );
}

export default Wallet;
