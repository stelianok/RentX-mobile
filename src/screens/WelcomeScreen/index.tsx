import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StatusBar} from 'react-native';

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
  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor={'#1b1b1f'} barStyle={'light-content'} />
      <Container>
        <Union height={50} width={80} />
        <Content>
          <Title>{'Seja \nBem-vindo'}</Title>
          <Subtitle>O que você deseja fazer?</Subtitle>
        </Content>
        <Footer>
          <Buttons>
            <SignInButton
              onPress={() => {
                navigation.navigate('SignIn');
              }}>
              <SignInText>Login</SignInText>
            </SignInButton>
            <SignUpButton
              onPress={() => {
                navigation.navigate('SignUp01');
              }}>
              <SignUpText>Cadastro</SignUpText>
            </SignUpButton>
          </Buttons>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}>
            <BackButtonText>Voltar</BackButtonText>
          </BackButton>
        </Footer>
      </Container>
    </>
  );
};
export default WelcomeScreen;
