import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../actions/user';

import TrybeLogo from '../../assets/trybe_logo.png';
import './login.css';

function Login() {
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
    const patternSenha = /^.{5,}$/;
    setSenha(e.target.value);
    if (patternSenha.test(senha)) {
      setSenhaInvalida(false);
    } else {
      setSenhaInvalida(true);
    }
  }, [senha]);

  const handleChangeEmail = useCallback((e) => {
    const patternEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    setEmail(e.target.value);
    if (patternEmail.test(email)) {
      setEmailInvalido(false);
    } else {
      setEmailInvalido(true);
    }
  }, [email]);

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
    <div className="FContainer">
      <div className="FLogoCotainer">
        <img className="FLogo" alt="Trybe" src={ TrybeLogo } />
      </div>
      <div className="FBlock">
        <input
          className="FInput"
          type="email"
          name="email"
          placeholder="E-mail"
          data-testid="email-input"
          onChange={ (e) => handleChangeEmail(e) }
          required
        />
      </div>

      <div className="FBlock">
        <input
          className="FInput"
          type="password"
          name="password"
          placeholder="Senha"
          data-testid="password-input"
          onChange={ (e) => handleChangePassword(e) }
          required
        />
      </div>
      {emailInvalido && (
        <h4 className="FErrorMessage">E-mail inválido</h4>
      )}
      {senhaInvalida && (
        <h4 className="FErrorMessage">A senha não pode ser menor que 6 caracteres</h4>
      )}

      <button
        style={
          !formValido
            ? { background: 'gray', cursor: 'not-allowed' }
            : { background: 'linear-gradient(120deg, #3FB589, #000, #3FB589), 200% ',
              cursor: 'pointer' }
        }
        className="FButon"
        type="button"
        disabled={ !formValido }
        onClick={ submit }
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
