import {Image} from 'react-native';
import styled from 'styled-components/native';

import Energy from '../../assets/icons/energy.svg';
import Leaf from '../../assets/icons/leaf.svg';
import Gas from '../../assets/icons/gas.svg';

export const Container = styled.Pressable`
  flex: 1;

  background-color: #f4f5f6;

  margin-bottom: 25px;
  border-radius: 5px;

  padding: 15px;

  flex-direction: row;
`;

export const CarInfo = styled.View`
  justify-content: space-between;
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
  flex: 1;
  justify-content: center;
  align-items: center;

  margin-left: 10px;
`;

export const CarImg = styled(Image)`
  height: 90px;
`;

export const IconContainer = styled.View`
  flex-direction: row;

  justify-content: center;
  align-items: center;

  height: 100%;

  margin-top: 9px;
  margin-left: 25px;
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

export const RowContainer = styled.View`
  flex-direction: row;

  justify-content: center;
  align-items: center;

  margin-top: 25px;
`;
