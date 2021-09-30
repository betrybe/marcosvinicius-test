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
        <Label data-testid="email-field">E-mail: {email}</Label>
        <Div>
          <Label data-testid="total-field">Despesa Total: R$ </Label>
          <Label data-testid="header-currency-field">{totalValue ? totalValue : 0} BRL</Label>
        </Div>
      </Block>
    </Container>
  );
}

export default Header;
