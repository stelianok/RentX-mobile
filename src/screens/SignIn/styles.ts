import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;

  justify-content: flex-start;
  align-items: flex-start;

  padding: 20px;
`;
export const Header = styled.View`
  margin-bottom: 80px;
`;
export const GoBackButton = styled.TouchableOpacity``;
export const Content = styled.KeyboardAvoidingView`
  justify-content: flex-start;
`;

export const TextArea = styled.View`
  margin-right: 150px;
  margin-bottom: 25px;
`;
export const Title = styled.Text`
  color: #47474d;
  text-align: left;

  font-family: 'ArchivoNarrow-SemiBold';
  font-weight: bold;
  font-size: 40px;

  margin-bottom: 15px;
`;
export const Subtitle = styled.Text`
  color: #7a7a80;
  text-align: left;

  font-family: 'Inter-Regular';
  font-size: 15px;
`;
export const Form = styled.View`
  margin-top: 100px;
`;

export const InputContainer = styled.View`
  flex-direction: row;

  justify-content: flex-start;
  align-items: center;
  align-content: center;

  margin-bottom: 5px;
`;
export const IconContainer = styled.View`
  background-color: #f5f5fa;

  padding: 15px;
`;
export const Input = styled.TextInput`
  flex: 1;
  background-color: #f5f5fa;
  color: #000;
  font-family: 'Inter-Regular';

  padding: 15px;
  margin-left: 5px;
`;

export const ChangePasswordVisibilityButton = styled.TouchableOpacity``;
export const Buttons = styled.View``;
export const ForgotPasswordButton = styled.TouchableOpacity`
  align-self: flex-end;
  align-content: center;

  margin-top: 15px;
  margin-bottom: 40px;
`;
export const ForgotPasswordButtonText = styled.Text`
  color: #737380;
  font-family: 'Inter-Regular';
`;
export const LoginButton = styled(RectButton)`
  background-color: #dc1637;
  width: 100%;

  justify-content: center;
  align-items: center;

  height: 56px;
  margin-bottom: 30px;
`;
export const LoginButtonText = styled.Text`
  color: #fff;
  font-family: 'Inter-Regular';
  font-size: 18px;
`;
