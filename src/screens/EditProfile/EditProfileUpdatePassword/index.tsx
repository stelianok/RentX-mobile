import React, {useState, useCallback} from 'react';
import {StatusBar} from 'react-native';

import Lambo from '../../assets/images/Lambo.png';
import {
  Container,
  Header,
  NavigationBar,
  BorderlessButton,
  EditIcon,
  Title,
  PowerIcon,
  ProfileImageContainer,
  ProfileImage,
  Content,
  ProfileName,
  ProfileInfo,
} from './styles';

const EditProfileUpdatePassword: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalVisibility = useCallback(() => {
    setIsModalVisible(!isModalVisible);
  }, [isModalVisible]);
  return (
    <>
      <StatusBar backgroundColor={'#29292e'} />
      <Container>
        <Header>
          <NavigationBar>
            <BorderlessButton
              android_ripple={{color: '#AEAEB3', borderless: true}}>
              <EditIcon name={'edit-3'} size={24} color={'#AEAEB3'} />
            </BorderlessButton>
            <Title>Perfil</Title>
            <BorderlessButton
              onPress={() => {
                handleModalVisibility();
              }}
              android_ripple={{color: '#AEAEB3', borderless: true}}>
              <PowerIcon name={'power'} size={24} color={'#AEAEB3'} />
            </BorderlessButton>
          </NavigationBar>
          <ProfileImageContainer>
            <ProfileImage
              source={{
                uri:
                  'https://i.pinimg.com/564x/e3/91/82/e3918233725210c31fcfc271323543c1.jpg',
              }}
            />
          </ProfileImageContainer>
        </Header>
        <Content>
          <ProfileName>Zagreus Prince of the underworld</ProfileName>
          <ProfileInfo />
        </Content>
      </Container>
    </>
  );
};
export default EditProfileUpdatePassword;
