import React, {useState} from 'react';
import {
  Container,
  Content,
  TextArea,
  Title,
  Subtitle,
  Form,
  Buttons,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  LoginButton,
  LoginButtonText,
} from './styles';

import PasswordIcon from '../../assets/icons/password.svg';
import EmailIcon from '../../assets/icons/email.svg';
import {KeyboardAvoidingView, Platform, StatusBar} from 'react-native';
import GoBackHeader from '../../components/GoBackHeader';

import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import {useNavigation, useRoute} from '@react-navigation/native';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Container>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
          <GoBackHeader />
          <Content>
            <TextArea>
              <Title>Estamos quase lá.</Title>
              <Subtitle>
                Faça seu login para começar uma experiência incrível.
              </Subtitle>
            </TextArea>
            <Form>
              <Input
                IconComponent={EmailIcon}
                placeholder={'E-mail'}
                placeholderTextColor={'#AEAEB3'}
                keyboardType={'email-address'}
                onChangeText={text => setEmail(text)}
                value={email}
              />
              <PasswordInput
                IconComponent={PasswordIcon}
                placeholder={'Senha'}
                placeholderTextColor={'#AEAEB3'}
                onChangeText={text => setPassword(text)}
                value={password}
              />

              <Buttons>
                <ForgotPasswordButton>
                  <ForgotPasswordButtonText>
                    Esqueci minha senha.
                  </ForgotPasswordButtonText>
                </ForgotPasswordButton>
                <LoginButton
                  onPress={() => {
                    navigation.navigate('ChooseDate', {
                      previousRouteName: route.name,
                    });
                  }}>
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
