import styled from 'styled-components/native';

import Energy from '../../../../assets/icons/energy.svg';
import Leaf from '../../../../assets/icons/leaf.svg';
import Gas from '../../../../assets/icons/gas.svg';

interface IProps {
  isActive: boolean;
}

export const FuelTypesContainer = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  background-color: #f4f5f6;

  margin-top: 15px;
  padding: 5px;

  margin-bottom: 25px;
`;

export const FuelButton = styled.Pressable<IProps>`
  flex: 1;
  background-color: ${props => (props.isActive ? '#fff' : '#f4f5f6')};

  justify-content: center;
  align-items: center;

  height: 75px;

  margin-right: 5px;
  margin-left: 1px;
`;

export const FuelButtonText = styled.Text<IProps>`
  font-family: 'Inter-Regular';
  font-size: 15px;
  color: ${props => (props.isActive ? '#47474D' : '#AEAEB3')};
`;

export const EnergyIcon = styled(Energy)<IProps>`
  color: ${props => (props.isActive ? '#dc1637' : '#AEAEB3')};
  margin-bottom: 5px;
`;

export const LeafIcon = styled(Leaf)<IProps>`
  color: ${props => (props.isActive ? '#dc1637' : '#AEAEB3')};
  margin-bottom: 5px;
`;

export const GasIcon = styled(Gas)<IProps>`
  color: ${props => (props.isActive ? '#dc1637' : '#AEAEB3')};
  margin-bottom: 5px;
`;
