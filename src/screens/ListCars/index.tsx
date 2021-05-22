import React from 'react';
import {StatusBar} from 'react-native';
import {FlatList} from 'react-native';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  SearchIcon,
} from './styles';

import Audi from '../../assets/images/Audi.png';
import Corvete from '../../assets/images/Corvete.png';
import Lambo from '../../assets/images/Lambo.png';
import Lancer from '../../assets/images/Lancer.png';
import Porche from '../../assets/images/Porche.png';
import Volvo from '../../assets/images/Volvo.png';

import CarCardLean from '../../components/CarCardLean';

interface Car {
  brand: string;
  name: string;
  image: any;
  price: number;
  fuel_type?: 'eletric' | 'gas' | 'alcohol';
}
const cars: Car[] = [
  {
    brand: 'LAMBORGHINI',
    name: 'Hurracan',
    image: Lambo,
    price: 580,
    fuel_type: 'eletric',
  },
  {
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    image: Audi,
    price: 470,
  },
  {
    brand: 'PORCHE',
    name: 'Panameraa',
    image: Porche,
    price: 235,
    fuel_type: 'gas',
  },
  {
    brand: 'CHEVROLET',
    name: 'Corvette Z06',
    image: Corvete,
    price: 943,
    fuel_type: 'gas',
  },
  {
    brand: 'VOLVO',
    name: 'XC40',
    image: Volvo,
    price: 260,
    fuel_type: 'alcohol',
  },
  {
    brand: 'MITSUBISHI',
    name: 'Lancer EVO X',
    image: Lancer,
    price: 605,
    fuel_type: 'gas',
  },
];

const ListCars: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={'#1b1b1f'} barStyle={'light-content'} />
      <Container>
        <Header>
          <Title>Listagem</Title>
          <Subtitle>12 Carros</Subtitle>
        </Header>
        <SearchContainer>
          <SearchInput
            placeholder="Qual carro você procura?"
            placeholderTextColor="#AEAEB3"
          />
          <SearchIconContainer>
            <SearchIcon width={24} height={24} />
          </SearchIconContainer>
        </SearchContainer>
        <Content>
          <FlatList
            data={cars}
            keyExtractor={item => item.name}
            renderItem={({item}: {item: Car}) => (
              <CarCardLean
                name={item.name}
                brand={item.brand}
                price={item.price}
                fuel_type={item.fuel_type}
                image={item.image}
              />
            )}
            style={{marginBottom: 15}}
          />
        </Content>
      </Container>
    </>
  );
};

export default ListCars;
