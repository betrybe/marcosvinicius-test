import React, { useState, useEffect } from 'react';
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
  const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const patternSenha = /^.{5,}$/;

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaInvalida, setSenhaInvalida] = useState(false);
  const [emailInvalido, setEmailInvalido] = useState(false);
  const [formValido, setFormValido] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const submit = () => {
    if (formValido) {
      dispatch(userLogin(email));
      history.push('/carteira');
    }
  }

  const handleChangePassword = (e) => {
    setSenha(e.target.value);
    if (senha.length >= 6 || patternSenha.test(senha)) {
      setSenhaInvalida(false);
    } else {
      setSenhaInvalida(true);
    }
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    if (patternEmail.test(email)) {
      setEmailInvalido(false);
    } else {
      setEmailInvalido(true);
    }
  }

  useEffect(() => {
    if (email !== '' && senha !== '') {
      if (emailInvalido || senhaInvalida) {
        setFormValido(false);
      } else {
        setFormValido(true);
      }
    }

  }, [email, senha])

  return (
    <FContainer>
      <FLogoContainer>
        <FLogo alt={"Trybe"} src={TrybeLogo} />
      </FLogoContainer>
      <FBlock>
        <FInput
          type="email"
          name="email"
          placeholder="E-mail"
          data-testid="email-input"
          onChange={e => handleChangeEmail(e)}
          required
        />
      </FBlock>

      <FBlock>
        <FInput
          type="password"
          name="password"
          placeholder="Senha"
          data-testid="password-input"
          onChange={e => handleChangePassword(e)}
          required
        />
      </FBlock>
      {emailInvalido && (
        <FErrorMessage>E-mail inválido</FErrorMessage>
      )}
      {senhaInvalida && (
        <FErrorMessage>A senha não pode ser menor que 6 caracteres</FErrorMessage>
      )}

      <FButon type="button" disabled={!formValido} isDisabled={!formValido} onClick={ submit }>
        Entrar
      </FButon>
    </FContainer>
  );
}

export default Login;
