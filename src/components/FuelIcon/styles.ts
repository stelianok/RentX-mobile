import styled from 'styled-components/native';

import Energy from '../../assets/icons/energy.svg';
import Leaf from '../../assets/icons/leaf.svg';
import Gas from '../../assets/icons/gas.svg';

interface IProps {
  color: string;
}
export const EnergyIcon = styled(Energy)<IProps>`
  color: ${props => props.color};
`;

export const LeafIcon = styled(Leaf)<IProps>`
  color: ${props => props.color};
`;

export const GasIcon = styled(Gas)<IProps>`
  color: ${props => props.color};
`;
