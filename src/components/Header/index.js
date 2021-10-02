import React from 'react';

import TrybeLogo from '../../assets/trybe_logo.png';
import {
  Container,
  Block,
  Label,
  Logo,
  Div
} from './styles';

function Header({ email, totalValue }) {
  return (
    <Container>
      <Logo src={TrybeLogo} />
      <Block>
      <Label>E-mail</Label>
      <Label data-testid="email-field">{email}</Label>
        <Div>
          <Label data-testid="total-field">Despesa Total: R$ {totalValue ? totalValue : 0}</Label>
          <Label data-testid="header-currency-field">BRL</Label>
        </Div>
      </Block>
    </Container>
  );
}

export default Header;
