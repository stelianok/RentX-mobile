import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  background-color: #1b1b1f;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  padding: 18px;

  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const Title = styled.Text`
  font-family: 'ArchivoNarrow-SemiBold';
  font-size: 26px;

  color: #fff;

  margin-left: 3px;
`;

export const Subtitle = styled.Text`
  align-self: center;

  font-family: 'Inter-Regular';
  font-size: 16px;

  color: #7a7a80;

  margin-left: 3px;
`;

export const Content = styled.View`
  flex: 1;
  margin: 25px;
  margin-top: 15px;
`;
