import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.Modal``;

export const Content = styled.View`
  flex: 1;

  justify-content: space-evenly;
  align-items: center;

  background-color: #1b1b1f;
`;

export const UnionIconContainer = styled.View``;
export const IconContainer = styled.View`
  border-width: 6px;

  padding: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-color: #29292e;
`;

export const TextArea = styled.View`
  justify-content: center;
  align-items: center;
  align-self: center;

  margin-left: 100px;
  margin-right: 100px;
`;
export const Title = styled.Text`
  font-family: 'ArchivoNarrow-SemiBold';
  font-size: 30px;
  text-align: center;
  color: #e1e1e6;

  margin-bottom: 15px;
`;

export const Subtitle = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  text-align: center;
  color: #a8a8b3;
`;

export const SubmitButton = styled.Pressable`
  background-color: #29292e;

  padding: 25px;

  padding-left: 35px;
  padding-right: 35px;

  justify-content: center;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  color: #e1e1e6;
  font-family: 'Inter-Regular';
`;
