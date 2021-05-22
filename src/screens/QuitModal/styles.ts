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

export const ButtonRow = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 25px;
`;
export const RedButton = styled.Pressable`
  background-color: #dc1637;

  justify-content: center;
  align-items: center;

  padding: 23px;
  margin-right: 10px;

  width: 40%;
`;

export const ButtonText = styled.Text`
  color: #dedee3;
  font-family: 'Inter-Regular';
  font-size: 15px;
`;

export const BlackButton = styled.Pressable`
  background-color: #29292e;

  justify-content: center;
  align-items: center;

  padding: 23px;
  margin-left: 10px;

  width: 40%;
`;
