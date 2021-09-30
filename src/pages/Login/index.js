import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../actions/user';

import TrybeLogo from '../../assets/trybe_logo.png';
import {
  FContainer,
  FLogoContainer,
  FBlock,
  FInput,
  FLogo,
  FButon,
  FErrorMessage
} from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isValid, setIsValid] = useState(true);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (senha.length >= 6) {
      dispatch(userLogin(email));
      setIsValid(true);
      history.push('/carteira');
    } else {
      setIsValid(false);
    }
  }

  return (
    <FContainer onSubmit={handleLogin}>
      <FLogoContainer>
        <FLogo alt={"Trybe"} src={TrybeLogo} />
      </FLogoContainer>
      <FBlock>
        <FInput
          type="email"
          name="email"
          placeholder="E-mail"
          data-testid="email-input"
          onChange={e => setEmail(e.target.value)}
          required
        />
      </FBlock>

      <FBlock>
        <FInput
          type="password"
          name="password"
          placeholder="Senha"
          data-testid="password-input"
          onChange={e => setSenha(e.target.value)}
          required
        />
      </FBlock>
      {!isValid && (
        <FErrorMessage>A senha não pode ser menor que 6 caracteres</FErrorMessage>
      )}
      <FButon data-testid="my-action" type="submit">
        Entrar
      </FButon>
    </FContainer>
  );
}

export default Login;
