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
  NextButton,
  NextButtonText,
} from './styles';
import Input from '../../components/Input';

import User from '../../assets/icons/user.svg';
import Email from '../../assets/icons/email.svg';
import GoBackHeader from '../../components/GoBackHeader';
import {useNavigation} from '@react-navigation/native';

const SignUpChooseNameAndEmail: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useNavigation();
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
              <Input
                IconComponent={User}
                placeholder={'Nome'}
                placeholderTextColor={'#AEAEB3'}
                onChangeText={text => setName(text)}
                value={name}
              />
              <Input
                IconComponent={Email}
                placeholder={'E-mail'}
                placeholderTextColor={'#AEAEB3'}
                keyboardType={'email-address'}
                onChangeText={text => setEmail(text)}
                value={email}
              />
              <NextButton
                onPress={() => {
                  navigation.navigate('SignUp02');
                }}>
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
