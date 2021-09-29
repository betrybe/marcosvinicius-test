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
    <FContainer onClick={() => {}}>
      <FLogoContainer>
        <FLogo alt={"Trybe"} src={TrybeLogo} />
      </FLogoContainer>
      <FBlock>
        <FInput
          type="email"
          name="email"
          placeholder="E-mail"
          required
        />
      </FBlock>

      <FBlock>
        <FInput
          type="password"
          name="password"
          placeholder="Senha"
          required
        />
      </FBlock>

      <FButon data-testid="my-action" type="submit" className="btn__customized">
        Entrar
      </FButon>
    </FContainer>
  );
}

export default Login;
