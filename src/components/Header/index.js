import React from 'react';

import TrybeLogo from '../../assets/trybe_logo.png';
import {
  Container,
  Block,
  Label,
  Logo
} from './styles';

function Header({ email, totalValue }) {
  return (
    <Container>
      <Logo src={TrybeLogo} />
      <Block>
        <Label>E-mail: {email}</Label>
        <Label>Despesa Total: R$ {totalValue}</Label>
      </Block>
    </Container>
  );
}

export default Header;
