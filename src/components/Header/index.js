import React from 'react';
import { useSelector } from 'react-redux';

import './header.css';
import TrybeLogo from '../../assets/trybe_logo.png';

function Header() {
  const { totalValue } = useSelector((state) => state.wallet);
  const { email } = useSelector((state) => state.user);

  return (
    <header className="Container">
      <img className="Logo" alt="Trybe" src={ TrybeLogo } />
      <div className="Block">
        <label className="Label">E-mail</label>
        <label className="Label" data-testid="email-field">{email}</label>
        <div>
          <span>
            <label className="Label">Despesa Total R$: </label>
            <label className="Label" data-testid="total-field">
              {totalValue || '0.00'}
            </label>
          </span>
          <label className="Label" data-testid="header-currency-field">BRL</label>
        </div>
      </div>
    </header>
  );
}

export default Header;
