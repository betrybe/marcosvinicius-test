import React from 'react';

import TrybeLogo from '../../assets/trybe_logo.png';
import {
  FContainer,
  FLogoContainer,
  FBlock,
  FInput,
  FLogo,
  FButon
} from './styles';

function Login() {
  return (
    <FContainer onSubmit={() => {}}>
      <FLogoContainer>
        <FLogo alt={"Trybe"} src={TrybeLogo} />
      </FLogoContainer>
      <FBlock className="txtb">
        <FInput
          type="email"
          name="email"
          placeholder="E-mail"
          required
        />
      </FBlock>

      <div className="txtb">
        <FInput
          type="password"
          name="password"
          placeholder="Senha"
          required
        />
      </div>

      <FButon type="submit" className="btn__customized">
        Entrar
      </FButon>
    </FContainer>
  );
}

export default Login;
