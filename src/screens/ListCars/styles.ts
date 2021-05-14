import styled from 'styled-components/native';
import Search from '../../assets/icons/search.svg';

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
  padding-bottom: 55px;

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

export const SearchContainer = styled.View`
  flex: 1;
  flex-direction: row;

  background-color: #fff;

  position: absolute;

  top: 80px;

  align-self: center;

  width: 88%;
  height: 60px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  background-color: #f4f5f6;
  color: #47474d;
  font-family: 'Inter-Regular';
  font-size: 15px;

  margin-right: 3px;

  padding-left: 20px;
`;

export const SearchIconContainer = styled.View`
  flex: 0.23;

  justify-content: center;
  align-items: center;
  background-color: #f4f5f6;
`;

export const SearchIcon = styled(Search)``;

export const Content = styled.View`
  flex: 1;
  margin: 25px;
  margin-top: 45px;
`;
