import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;

  justify-content: flex-start;
  align-items: center;

  padding-left: 18px;
  padding-right: 18px;
`;

export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const TextArea = styled.View`
  padding-right: 170px;
  margin-bottom: 50px;
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
  width: 100%;
  margin-top: 100px;
`;

export const Description = styled.Text`
  font-family: 'ArchivoNarrow-SemiBold';
  font-size: 23px;

  margin-bottom: 20px;
`;

export const NextButton = styled(RectButton)`
  background-color: #dc1637;
  width: 100%;

  justify-content: center;
  align-items: center;

  height: 56px;

  margin-top: 25px;
  margin-bottom: 30px;
`;

export const NextButtonText = styled.Text`
  color: #fff;
  font-family: 'Inter-Regular';
  font-size: 18px;
`;
