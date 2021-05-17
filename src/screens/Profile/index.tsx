import React from 'react';
import CarCard from '../../components/CarCard';

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
  SectionContainer,
  SectionTitle,
  SectionInfo,
  Divider,
  FavoriteCarContainer,
} from './styles';
import CarCardLean from '../../components/CarCardLean';
const Profile: React.FC = () => {
  return (
    <Container>
      <Header>
        <NavigationBar>
          <BorderlessButton
            android_ripple={{color: '#AEAEB3', borderless: true}}>
            <EditIcon name={'edit-3'} size={24} color={'#AEAEB3'} />
          </BorderlessButton>
          <Title>Perfil</Title>
          <BorderlessButton
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
        <ProfileInfo>
          <SectionContainer>
            <SectionTitle>Agendamentos Feitos</SectionTitle>
            <SectionInfo>05</SectionInfo>
          </SectionContainer>
          <Divider />
          <SectionContainer>
            <SectionTitle>Carro Favorito</SectionTitle>
            <SectionInfo>Utilizado 2 vezes</SectionInfo>
          </SectionContainer>
          <FavoriteCarContainer>
            <CarCardLean
              name={'LAMBORGHINI'}
              brand={'Hurracan'}
              price={580}
              fuel_type={'eletric'}
              image={Lambo}
            />
          </FavoriteCarContainer>
        </ProfileInfo>
      </Content>
    </Container>
  );
};
export default Profile;
