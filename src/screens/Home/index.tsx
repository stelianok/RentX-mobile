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

const Home: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={'#1b1b1f'} barStyle={'light-content'} />
      <Container>
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
              <FilterButton>
                <FilterIcon width={35} height={35} />
              </FilterButton>
            </RowContainer>
          </ResultContainer>
          <CarCard />
          <CarCard />
        </Content>
      </Container>
    </>
  );
};

export default Home;
