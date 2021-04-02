import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import UnionIcon from '../../assets/icons/union.svg';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1b1b1f;

  justify-content: flex-start;
  align-items: center;
`;

export const Union = styled(UnionIcon)`
  margin-top: 125px;
  margin-bottom: 125px;
`;

export const Content = styled.View`
  flex: 1;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
`;
export const Title = styled.Text`
  color: #f4f5f6;
  font-family: 'ArchivoNarrow-SemiBold';
  font-weight: bold;
  font-size: 40px;
  text-align: center;

  margin-bottom: 10px;
`;
export const Subtitle = styled.Text`
  color: #dedee3;
  font-family: 'Inter-Regular';
  font-size: 15px;
`;
export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
export const Buttons = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 25px;
`;
export const SignInButton = styled(RectButton)`
  background-color: #dc1637;

  justify-content: center;
  align-items: center;

  padding: 23px;
  margin-right: 10px;

  width: 40%;
`;
export const SignInText = styled.Text`
  color: #dedee3;
  font-family: 'Inter-Regular';
  font-size: 15px;
`;
export const SignUpButton = styled(RectButton)`
  background-color: #29292e;

  justify-content: center;
  align-items: center;

  padding: 23px;
  margin-left: 10px;

  width: 40%;
`;
export const SignUpText = styled.Text`
  color: #dedee3;
  font-family: 'Inter-Regular';
  font-size: 15px;
`;
export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
export const BackButtonText = styled.Text`
  align-self: center;
  color: #7a7a80;
  font-family: 'Inter-Regular';
  font-size: 15px;

  margin-bottom: 35px;
`;
