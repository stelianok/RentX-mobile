import React from 'react';
import {StatusBar} from 'react-native';
import CarCard from '../../components/CarCard';

import {
  Container,
  Header,
  DateContainer,
  DateTitle,
  DateText,
  Content,
  ResultContainer,
  IconContainer,
  Chevron,
  ResultTitle,
  RowContainer,
  NumberOfCars,
  FilterButton,
  FilterIcon,
} from './styles';

import Audi from '../../assets/images/Audi.png';
import Corvete from '../../assets/images/Corvete.png';
import Lambo from '../../assets/images/Lambo.png';
import Lancer from '../../assets/images/Lancer.png';
import Porche from '../../assets/images/Porche.png';
import Volvo from '../../assets/images/Volvo.png';

import {FlatList} from 'react-native';
import Filter from '../../components/Filter';

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

const Home: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={'#1b1b1f'} barStyle={'light-content'} />
      <Container>
        <Filter />
        <Header>
          <DateContainer>
            <DateTitle>De</DateTitle>
            <DateText>16 julho 2020</DateText>
          </DateContainer>
          <IconContainer>
            <Chevron name={'chevron-down'} size={20} color={'#7A7A80'} />
          </IconContainer>
          <DateContainer>
            <DateTitle>Até</DateTitle>
            <DateText>20 julho 2020</DateText>
          </DateContainer>
        </Header>
        <Content>
          <ResultContainer>
            <ResultTitle>Resultados</ResultTitle>
            <RowContainer>
              <NumberOfCars>3 carros</NumberOfCars>
              <FilterButton
                android_ripple={{
                  color: '#aeaeb3',
                  borderless: true,
                  radius: 25,
                }}
                onPress={() => {
                  console.warn('lol');
                }}>
                <FilterIcon width={30} height={30} />
              </FilterButton>
            </RowContainer>
          </ResultContainer>
          <FlatList
            data={cars}
            keyExtractor={item => item.name}
            renderItem={({item}: {item: Car}) => (
              <CarCard
                name={item.name}
                brand={item.brand}
                price={item.price}
                fuel_type={item.fuel_type}
                image={item.image}
              />
            )}
          />
        </Content>
      </Container>
    </>
  );
};

export default Home;
