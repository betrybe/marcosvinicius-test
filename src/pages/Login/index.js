import React, { useState, useEffect, useCallback } from 'react';
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
  const patternEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  const patternSenha = /^.{5,}$/;


  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaInvalida, setSenhaInvalida] = useState(false);
  const [emailInvalido, setEmailInvalido] = useState(false);
  const [formValido, setFormValido] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const submit = useCallback(() => {
    if (formValido) {
      dispatch(userLogin(email));
      history.push('/carteira');
    }
  }, [dispatch, email, formValido, history]);

  const handleChangePassword = useCallback((e) => {
    setSenha(e.target.value);
    if (patternSenha.test(senha)) {
      setSenhaInvalida(false);
    } else {
      setSenhaInvalida(true);
    }
  }, [senha, patternSenha]);

  const handleChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
    if (patternEmail.test(email)) {
      setEmailInvalido(false);
    } else {
      setEmailInvalido(true);
    }
  }, [email, patternEmail]);

  useEffect(() => {
    if (email !== '' && senha !== '') {
      if (emailInvalido || senhaInvalida) {
        setFormValido(false);
      } else {
        setFormValido(true);
      }
    }

  }, [email, senha, emailInvalido, senhaInvalida]);

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
