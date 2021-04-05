import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Content,
  TextArea,
  Title,
  Subtitle,
  Form,
  ChangePasswordVisibilityButton,
  Description,
  InputContainer,
  IconContainer,
  Input,
  SignUpButton,
  SignUpButtonText,
} from './styles';
import GoBackHeader from '../../components/GoBackHeader';

import Password from '../../assets/icons/password.svg';

import {KeyboardAvoidingView, Platform, StatusBar} from 'react-native';

const SignUpChoosePassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [eyeIconName, setEyeIconName] = useState('eye');

  const handleEyeIcon = useCallback(() => {
    isSecureTextEntry ? setEyeIconName('eye') : setEyeIconName('eye-off');
  }, [isSecureTextEntry]);

  const handlePasswordVisibility = useCallback(() => {
    setIsSecureTextEntry(!isSecureTextEntry);
    handleEyeIcon();
  }, [handleEyeIcon, isSecureTextEntry]);

  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Container>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
          <GoBackHeader numberOfScreens={2} currentActiveScreenIndex={2} />
          <Content>
            <TextArea>
              <Title>Crie sua conta</Title>
              <Subtitle>Faça seu cadastro de forma rápida e fácil</Subtitle>
            </TextArea>
            <Form>
              <Description>2. Dados</Description>
              <InputContainer>
                <IconContainer>
                  <Password width={28} height={28} />
                </IconContainer>
                <Input
                  placeholder={'Senha'}
                  placeholderTextColor={'#AEAEB3'}
                  secureTextEntry={isSecureTextEntry}
                  onChangeText={text => setPassword(text)}
                  value={password}
                />
                <ChangePasswordVisibilityButton
                  onPress={() => {
                    handlePasswordVisibility();
                  }}>
                  <IconContainer>
                    <Icon name={eyeIconName} size={28} color={'#47474d'} />
                  </IconContainer>
                </ChangePasswordVisibilityButton>
              </InputContainer>
              <InputContainer>
                <IconContainer>
                  <Password width={28} height={28} />
                </IconContainer>
                <Input
                  placeholder={'Repetir senha'}
                  placeholderTextColor={'#AEAEB3'}
                  secureTextEntry={isSecureTextEntry}
                  onChangeText={text => setConfirmPassword(text)}
                  value={confirmPassword}
                />
                <ChangePasswordVisibilityButton
                  onPress={() => {
                    handlePasswordVisibility();
                  }}>
                  <IconContainer>
                    <Icon name={eyeIconName} size={28} color={'#47474d'} />
                  </IconContainer>
                </ChangePasswordVisibilityButton>
              </InputContainer>
              <SignUpButton>
                <SignUpButtonText>Cadastrar</SignUpButtonText>
              </SignUpButton>
            </Form>
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </>
  );
};

export default SignUpChoosePassword;
