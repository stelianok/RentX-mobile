import React, {useState, useCallback} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import CarCard from '../../components/CarCard';

import {
  Container,
  ModalSubmitButton,
  ModalSubmitButtonText,
  CleanPreferencesButton,
  CleanPreferencesText,
  Header,
  GoToScheduleButton,
  DateContainer,
  DateTitle,
  DateText,
  Content,
  ResultContainer,
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

interface Params {
  startDate: Date;
  endDate: Date;
  numberOfDays: number;
}

const Home: React.FC = () => {
  const navigator = useNavigation();
  const route = useRoute();

  const {startDate, endDate, numberOfDays} = route.params as Params;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModalVisibility = useCallback(() => {
    setIsModalVisible(!isModalVisible);
    console.warn(route.params);
  }, [isModalVisible, route.params]);

  return (
    <>
      <StatusBar backgroundColor={'#1b1b1f'} barStyle={'light-content'} />
      <Container>
        <Filter
          statusBarTranslucent={false}
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(!isModalVisible);
          }}
          CleanPreferencesButton={() => (
            <CleanPreferencesButton
              onPress={() => {
                setIsModalVisible(false);
              }}>
              <CleanPreferencesText>Limpar todos</CleanPreferencesText>
            </CleanPreferencesButton>
          )}
          SubmitButton={() => (
            <ModalSubmitButton
              onPress={() => {
                setIsModalVisible(!isModalVisible);
              }}
              android_ripple={{color: '#fff'}}>
              <ModalSubmitButtonText>Confirmar</ModalSubmitButtonText>
            </ModalSubmitButton>
          )}
        />
        <Header>
          <DateContainer>
            <DateTitle>De</DateTitle>
            <DateText>{startDate}</DateText>
          </DateContainer>
          <GoToScheduleButton
            android_ripple={{borderless: true, radius: 15, color: '#7A7A80'}}
            onPress={() => {
              navigator.navigate('ChooseDate');
            }}>
            <Chevron name={'chevron-down'} size={28} color={'#7A7A80'} />
          </GoToScheduleButton>

          <DateContainer>
            <DateTitle>Até</DateTitle>
            <DateText>{endDate}</DateText>
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
                  handleModalVisibility();
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
                schedule={{
                  startDate,
                  endDate,
                  numberOfDays,
                }}
              />
            )}
            style={{marginBottom: 25}}
          />
        </Content>
      </Container>
    </>
  );
};

export default Home;
