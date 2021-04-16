import styled from 'styled-components/native';

import Energy from '../../assets/icons/energy.svg';
import Leaf from '../../assets/icons/leaf.svg';
import Gas from '../../assets/icons/gas.svg';

interface IProps {
  isActive: boolean;
}
export const FilterModal = styled.Modal``;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: #fff;

  margin-top: 160px;

  padding: 30px;
  padding-left: 25px;

  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  justify-content: space-between;
`;

export const TopDivider = styled.View`
  background-color: #ebebf0;

  width: 48px;
  height: 4px;

  border-radius: 100px;

  align-self: center;

  margin-bottom: 5px;
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.Text`
  font-family: 'ArchivoNarrow-SemiBold';
  font-weight: bold;
  font-size: 25px;
  color: #47474d;
`;

export const CleanPreferencesButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const CleanPreferencesText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 14px;
  color: #aeaeb3;
`;

export const ModalDivider = styled.View`
  width: 100%;
  height: 2px;

  background-color: #ebebf0;

  align-self: center;

  margin-top: 15px;
  margin-bottom: 30px;
`;

export const PricePerDay = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  color: #dc1637;
`;

export const SliderContainer = styled.View`
  margin-top: 15px;
  margin-bottom: 15px;
  align-self: center;
`;

export const SliderMarker = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;

  width: 36px;
  height: 28px;
`;

export const SliderMarkerColumn = styled.View`
  background-color: #dedee3;

  width: 3px;
  height: 12px;
`;

export const ModalText = styled.Text`
  font-family: 'ArchivoNarrow-Medium';
  font-size: 20px;
  color: #47474d;
`;

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

export const TransmissionContainer = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  background-color: #f4f5f6;

  margin-top: 15px;
  margin-bottom: 25px;

  padding: 5px;
`;

export const TransmissionButton = styled.Pressable<IProps>`
  flex: 1;
  background-color: ${props => (props.isActive ? '#fff' : '#f4f5f6')};

  justify-content: center;
  align-items: center;

  height: 60px;

  margin-right: 5px;
  margin-left: 1px;
`;

export const TransmissionButtonText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
`;

export const SubmitButton = styled.Pressable`
  background-color: #dc1637;
  width: 100%;

  justify-content: center;
  align-items: center;

  height: 56px;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-family: 'Inter-Regular';
  font-size: 18px;
`;
