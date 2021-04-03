import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Header,
  GoBackButton,
  Content,
  Title,
  Subtitle,
  Form,
  Buttons,
  AlignButtonsInRow,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  LoginButton,
  LoginButtonText,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Header>
        <GoBackButton>
          <Icon name={'chevron-left'} size={18} color={'#AEAEB3'} />
        </GoBackButton>
      </Header>
      <Content>
        <Title>Estamos quase lá</Title>
        <Subtitle>
          Faça seu login para começar uma experiênciaincrível.
        </Subtitle>
        <Form>
          <Buttons>
            <AlignButtonsInRow>
              <ForgotPasswordButton>
                <ForgotPasswordButtonText>
                  Esqueci minha senha.
                </ForgotPasswordButtonText>
              </ForgotPasswordButton>
            </AlignButtonsInRow>
            <LoginButton>
              <LoginButtonText>Login</LoginButtonText>
            </LoginButton>
          </Buttons>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
