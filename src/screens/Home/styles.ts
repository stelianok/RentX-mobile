import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

import Filter from '../../assets/icons/filter.svg';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const ModalSubmitButton = styled.Pressable`
  background-color: #dc1637;
  width: 100%;

  justify-content: center;
  align-items: center;

  height: 56px;
`;

export const ModalSubmitButtonText = styled.Text`
  color: #fff;
  font-family: 'Inter-Regular';
  font-size: 18px;
`;

export const Header = styled.View`
  background-color: #1b1b1f;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 18px;
  padding-bottom: 25px;
`;

export const DateContainer = styled.View``;

export const IconContainer = styled.View`
  flex: 1;

  height: 100%;
  flex-direction: row;

  justify-content: center;
  align-items: flex-end;
`;

export const Chevron = styled(Icon)``;

export const DateTitle = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 12px;

  color: #7a7a80;

  margin-left: 3px;
`;

export const DateText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 18px;

  color: #fff;

  margin-left: 3px;
`;

export const Content = styled.View`
  flex: 1;
  margin: 25px;
`;
export const ResultContainer = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 25px;
`;
export const ResultTitle = styled.Text`
  font-family: 'ArchivoNarrow-SemiBold';
  font-size: 25px;
  color: #47474d;
`;
export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const NumberOfCars = styled.Text`
  font-family: 'Inter-regular';
  font-size: 14px;
  color: #aeaeb3;

  margin-right: 15px;
`;

export const FilterButton = styled.Pressable``;

export const FilterIcon = styled(Filter)``;
