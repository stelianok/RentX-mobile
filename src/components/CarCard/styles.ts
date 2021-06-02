import {Image} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.Pressable`
  flex: 1;

  background-color: #f4f5f6;

  margin-bottom: 25px;
  border-radius: 5px;

  padding: 25px;

  justify-content: center;
`;

export const Header = styled.View`
  flex-direction: row;
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
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const CarImg = styled(Image)`
  height: 140px;
`;

export const Footer = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: flex-start;
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
