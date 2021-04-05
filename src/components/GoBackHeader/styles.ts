import styled from 'styled-components/native';

interface IProps {
  isActive: boolean;
}
export const Container = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: flex-start;

  margin-top: 25px;
  margin-bottom: 75px;

  align-content: center;
`;

export const GoBackButton = styled.TouchableOpacity`
  justify-content: center;
  height: 45px;
`;

export const Pagination = styled.View`
  flex-direction: row;
  align-content: center;
`;

export const Dot = styled.Text<IProps>`
  color: ${props => (props.isActive ? '#47474d' : '#aeaeb3')};
  font-size: 32px;
  padding-bottom: -50px;
`;
