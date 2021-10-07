import React from 'react';
import { useSelector } from 'react-redux';

import TrybeLogo from '../../assets/trybe_logo.png';
import {
  Container,
  Block,
  Label,
  Logo,
  Div,
  Span,

} from './styles';

function Header() {
  const { totalValue } = useSelector((state) => state.wallet);
  const { email } = useSelector((state) => state.user);

  return (
    <Container>
      <Logo src={ TrybeLogo } />
      <Block>
        <Label>E-mail</Label>
        <Label data-testid="email-field">{email}</Label>
        <Div>
          <Span>
            <Label>Despesa Total R$: </Label>
            <Label data-testid="total-field">
              {totalValue || '0.00'}
            </Label>
          </Span>
          <Label data-testid="header-currency-field">BRL</Label>
        </Div>
      </Block>
    </Container>
  );
}

export default Header;
