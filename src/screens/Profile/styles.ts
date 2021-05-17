import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
export const Header = styled.View`
  background-color: #29292e;
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

export const ProfileImageContainer = styled.View``;
export const ProfileImage = styled.Image``;
export const Content = styled.View``;
export const ProfileName = styled.Text``;
export const ProfileInfo = styled.Text``;
export const SectionContainer = styled.View``;
export const SectionTitle = styled.Text``;
export const SectionInfo = styled.Text``;
export const Divider = styled.View``;
