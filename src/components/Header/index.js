import React from 'react';

import TrybeLogo from '../../assets/trybe_logo.png';
import {
  Container,
  Block,
  Label,
  Logo,
  Div,
  Span

} from './styles';

function Header({ email, totalValue }) {
  return (
    <Container>
      <Logo src={TrybeLogo} />
      <Block>
      <Label>E-mail</Label>
      <Label data-testid="email-field">{email}</Label>
        <Div>
          <Span>
          <Label>Despesa Total: R$: </Label>
            <Label data-testid="total-field">{Number(totalValue).toFixed(2)}</Label>
          </Span>
          <Label data-testid="header-currency-field">BRL</Label>
        </Div>
      </Block>
    </Container>
  );
}

export default Header;
