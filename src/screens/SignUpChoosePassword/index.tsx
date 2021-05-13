import React, {useCallback, useState} from 'react';
import {
  Container,
  Content,
  TextArea,
  Title,
  Subtitle,
  Form,
  Description,
  SignUpButton,
  SignUpButtonText,
} from './styles';
import GoBackHeader from '../../components/GoBackHeader';

import Password from '../../assets/icons/password.svg';

import {KeyboardAvoidingView, Platform} from 'react-native';
import SuccessModal from '../SuccessModal';
import PasswordInput from '../../components/PasswordInput';

const SignUpChoosePassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalVisibility = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
        <GoBackHeader numberOfScreens={2} currentActiveScreenIndex={2} />
        <SuccessModal
          title={'Conta criada!'}
          subtitle={'Agora é só fazer login e aproveitar.'}
          buttonText={'Ok'}
          modalVisibility={isModalVisible}
        />
        <Content>
          <TextArea>
            <Title>Crie sua conta</Title>
            <Subtitle>Faça seu cadastro de forma rápida e fácil</Subtitle>
          </TextArea>
          <Form>
            <Description>2. Dados</Description>

            <PasswordInput
              IconComponent={Password}
              placeholder={'Senha'}
              onChangeText={text => setPassword(text)}
              value={password}
            />

            <PasswordInput
              IconComponent={Password}
              placeholder={'Repetir senha'}
              onChangeText={text => setConfirmPassword(text)}
              value={confirmPassword}
            />

            <SignUpButton
              onPress={() => {
                handleModalVisibility();
              }}>
              <SignUpButtonText>Cadastrar</SignUpButtonText>
            </SignUpButton>
          </Form>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignUpChoosePassword;
