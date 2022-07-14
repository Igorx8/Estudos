import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small> Testando </small>
      </Title>
      <Paragrafo> Lorem ipsum</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}

export default Login;
