import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
export const Header = styled.View`
  background-color: #29292e;
  height: 23%;

  margin-bottom: 60px;
`;
export const NavigationBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;
export const BorderlessButton = styled.Pressable`
  justify-content: center;
  align-items: center;

  border-radius: 25px;

  padding: 8px;
`;
export const EditIcon = styled(Icon)`
  flex: 1;
`;
export const PowerIcon = styled(Icon)``;

export const Title = styled.Text`
  font-family: 'ArchivoNarrow-SemiBold';
  font-size: 25px;
  color: #fff;
`;

export const ProfileImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  align-self: center;

  margin-top: 100px;

  background-color: blue;
  border-radius: 90px;
  position: absolute;
`;
export const ProfileImage = styled.Image`
  width: 140px;
  height: 140px;

  border-radius: 90px;
`;
export const Content = styled.View`
  margin: 20px;
  margin-bottom: 0px;
  background-color: #fff;
  flex: 1;
`;
export const ProfileName = styled.Text`
  font-family: 'ArchivoNarrow-SemiBold';
  font-size: 35px;
  text-align: center;
  color: #41414d;

  margin-right: 15px;
  margin-left: 15px;
`;
export const ProfileInfo = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-top: 60px;
`;
