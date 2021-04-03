import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Header,
  GoBackButton,
  Content,
  TextArea,
  Title,
  Subtitle,
  Form,
  InputContainer,
  IconContainer,
  Input,
  ChangePasswordVisibilityButton,
  Buttons,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  LoginButton,
  LoginButtonText,
} from './styles';

import Password from '../../assets/icons/password.svg';
import Email from '../../assets/icons/email.svg';
import {KeyboardAvoidingView, Platform, StatusBar} from 'react-native';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Container>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
          <Header>
            <GoBackButton>
              <Icon name={'chevron-left'} size={24} color={'#AEAEB3'} />
            </GoBackButton>
          </Header>
          <Content>
            <TextArea>
              <Title>Estamos quase lá.</Title>
              <Subtitle>
                Faça seu login para começar uma experiência incrível.
              </Subtitle>
            </TextArea>
            <Form>
              <InputContainer>
                <IconContainer>
                  <Email width={28} height={28} />
                </IconContainer>
                <Input
                  placeholder={'E-mail'}
                  placeholderTextColor={'#AEAEB3'}
                  keyboardType={'email-address'}
                  onChangeText={text => setEmail(text)}
                  value={email}
                />
              </InputContainer>
              <InputContainer>
                <IconContainer>
                  <Password width={28} height={28} />
                </IconContainer>
                <Input
                  placeholder={'Senha'}
                  placeholderTextColor={'#AEAEB3'}
                  secureTextEntry={true}
                  onChangeText={text => setPassword(text)}
                  value={password}
                />
                <ChangePasswordVisibilityButton
                  onPress={() => {
                    console.log('lol');
                  }}>
                  <IconContainer>
                    <Icon name={'eye'} size={28} color={'#47474d'} />
                  </IconContainer>
                </ChangePasswordVisibilityButton>
              </InputContainer>
              <Buttons>
                <ForgotPasswordButton>
                  <ForgotPasswordButtonText>
                    Esqueci minha senha.
                  </ForgotPasswordButtonText>
                </ForgotPasswordButton>
                <LoginButton>
                  <LoginButtonText>Login</LoginButtonText>
                </LoginButton>
              </Buttons>
            </Form>
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </>
  );
};

export default SignIn;
