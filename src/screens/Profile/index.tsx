import React from 'react';
import CarCard from '../../components/CarCard';

import Lancer from '../../assets/images/Lancer.png';
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
} from './styles';
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
        <ProfileName>Zagreus</ProfileName>
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
        </ProfileInfo>
        <CarCard
          name={'Lancer EVO X'}
          brand={'MITSUBISHI'}
          price={605}
          fuel_type={'gas'}
          image={Lancer}
        />
      </Content>
    </Container>
  );
};
export default Profile;
