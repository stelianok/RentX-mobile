import {Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import Energy from '../../assets/icons/energy.svg';
import Leaf from '../../assets/icons/leaf.svg';
import Gas from '../../assets/icons/gas.svg';

export const Container = styled.View`
  flex: 1;

  background-color: #f4f5f6;

  margin-bottom: 25px;
  border-radius: 5px;

  padding: 25px;

  justify-content: center;
`;

export const SubmitButton = styled(RectButton)``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
`;
export const TextArea = styled.View``;
export const Subtitle = styled.Text`
  font-family: 'ArchivoNarrow-Medium';
  font-size: 12px;

  color: #aeaeb3;
`;
export const Name = styled.Text`
  font-family: 'ArchivoNarrow-Medium';
  font-size: 20px;

  color: #47474d;
`;
export const Price = styled.Text`
  font-family: 'ArchivoNarrow-Medium';
  font-size: 20px;

  color: #dc1637;
`;
export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;

  margin-bottom: -15px;
`;

export const CarImg = styled(Image)`
  height: 80%;
`;

export const Footer = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 25px;
`;
export const EnergyIcon = styled(Energy)`
  color: #aeaeb3;
`;
export const LeafIcon = styled(Leaf)`
  color: #aeaeb3;
`;
export const GasIcon = styled(Gas)`
  color: #aeaeb3;
`;
export const Pagination = styled.View`
  flex-direction: row;
`;
export const Dot = styled.Text`
  color: #47474d;
  font-size: 24px;
  margin-right: 3px;
`;
export const InactiveDot = styled.Text`
  color: #aeaeb3;
  font-size: 24px;

  margin-right: 3px;
  margin-left: 3px;
`;
