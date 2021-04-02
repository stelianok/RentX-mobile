import React from 'react';

import {
  Container,
  Union,
  Content,
  Title,
  Subtitle,
  Footer,
  Buttons,
  SignInButton,
  SignInText,
  SignUpButton,
  SignUpText,
  BackButton,
  BackButtonText,
} from './styles';

const WelcomeScreen: React.FC = () => {
  return (
    <Container>
      <Union height={50} width={80} />
      <Content>
        <Title>{'Seja \nBem-vindo'}</Title>
        <Subtitle>O que você deseja fazer?</Subtitle>
      </Content>
      <Footer>
        <Buttons>
          <SignInButton>
            <SignInText>Login</SignInText>
          </SignInButton>
          <SignUpButton>
            <SignUpText>Cadastro</SignUpText>
          </SignUpButton>
        </Buttons>
        <BackButton>
          <BackButtonText>Voltar</BackButtonText>
        </BackButton>
      </Footer>
    </Container>
  );
};
export default WelcomeScreen;
