import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, StatusBar} from 'react-native';

import {
  Container,
  Content,
  TextArea,
  Title,
  Subtitle,
  Form,
  Description,
  InputContainer,
  IconContainer,
  Input,
  NextButton,
  NextButtonText,
} from './styles';

import User from '../../assets/icons/user.svg';
import Email from '../../assets/icons/email.svg';
import GoBackHeader from '../../components/GoBackHeader';

const SignUpChooseNameAndEmail: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Container>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
          <GoBackHeader numberOfScreens={2} currentActiveScreenIndex={1} />

          <Content>
            <TextArea>
              <Title>Crie sua conta</Title>
              <Subtitle>Faça seu cadastro de forma rápida e fácil</Subtitle>
            </TextArea>
            <Form>
              <Description>1. Dados</Description>
              <InputContainer>
                <IconContainer>
                  <User width={28} height={28} />
                </IconContainer>
                <Input
                  placeholder={'Nome'}
                  placeholderTextColor={'#AEAEB3'}
                  onChangeText={text => setName(text)}
                  value={name}
                />
              </InputContainer>
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
              <NextButton>
                <NextButtonText>Próximo</NextButtonText>
              </NextButton>
            </Form>
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </>
  );
};

export default SignUpChooseNameAndEmail;
