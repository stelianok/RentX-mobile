import styled from 'styled-components/native';
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

export const ModalText = styled.Text`
  font-family: 'ArchivoNarrow-Medium';
  font-size: 20px;
  color: #47474d;
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
