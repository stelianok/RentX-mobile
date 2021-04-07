import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import ArrowRightSVG from '../../assets/icons/arrow_right.svg';

export const Container = styled.View`
  flex: 1;

  background-color: #fff;
`;

export const Header = styled.View`
  background-color: #29292e;
  padding: 20px;
`;

export const Title = styled.Text`
  font-family: 'ArchivoNarrow-SemiBold';
  font-size: 30px;
  color: #fff;

  margin-right: 200px;
  margin-bottom: 30px;
`;

export const DatesContainer = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const ArrowRightIcon = styled(ArrowRightSVG)`
  margin-left: 30px;
  margin-right: 30px;
`;

export const DateInputContainer = styled.View`
  flex: 0.5;

  justify-content: flex-start;
  align-items: flex-start;
`;

export const DateInputTitle = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 12px;

  color: #7a7a80;

  margin-left: 3px;
`;

export const DateInput = styled.TextInput`
  width: 100%;
`;

export const CalendarContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  flex: 0.18;

  justify-content: center;
  align-items: center;

  padding-left: 25px;
  padding-right: 25px;
`;

export const SubmitButton = styled(RectButton)`
  background-color: #dc1637;
  width: 100%;

  justify-content: center;
  align-items: center;

  height: 65px;
  margin-bottom: 30px;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-family: 'Inter-Regular';
  font-size: 18px;
`;
