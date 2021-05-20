import React from 'react';
import {
  Container,
  Header,
  BorderlessButton,
  GoBackIcon,
  Pagination,
  Dot,
  InactiveDot,
  Content,
  CarImageContainer,
  CarImage,
  CarBasicInfoContainer,
  CarInfo,
  DailyPrice,
  Title,
  Info,
  Specifications,
  Specification,
  SpeedIcon,
  SpecificationInfo,
  UpIcon,
  StrenghtIcon,
  FuelIcon,
  GearIcon,
  UserIcon,
  ScheduleContainer,
  DateContainer,
  DateInfo,
  ArrowRightIcon,
  Footer,
  RowContainer,
  PriceContainer,
  DayValue,
  TotalValue,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import Lambo from '../../assets/images/Lambo.png';
import {StatusBar} from 'react-native';

const CarDetails: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Container>
        <Header>
          <BorderlessButton
            android_ripple={{color: '#AEAEB3', borderless: true}}>
            <GoBackIcon name={'chevron-left'} size={24} color={'#AEAEB3'} />
          </BorderlessButton>
          <Pagination>
            <Dot>•</Dot>
            <InactiveDot>•</InactiveDot>
            <InactiveDot>•</InactiveDot>
            <InactiveDot>•</InactiveDot>
          </Pagination>
        </Header>
        <Content>
          <CarImageContainer>
            <CarImage source={Lambo} resizeMode={'contain'} />
          </CarImageContainer>
          <CarBasicInfoContainer>
            <CarInfo>
              <Title>LAMBORGHINI</Title>
              <Info>Hurracan</Info>
            </CarInfo>
            <CarInfo>
              <Title>AO DIA</Title>
              <DailyPrice>R$ 580</DailyPrice>
            </CarInfo>
          </CarBasicInfoContainer>
          <Specifications>
            <Specification>
              <SpeedIcon width={38} height={38} />
              <SpecificationInfo>380km/h</SpecificationInfo>
            </Specification>
            <Specification>
              <UpIcon width={38} height={38} />
              <SpecificationInfo>3.2s</SpecificationInfo>
            </Specification>
            <Specification>
              <StrenghtIcon width={38} height={38} />
              <SpecificationInfo>800 HP</SpecificationInfo>
            </Specification>
            <Specification>
              <FuelIcon width={38} height={38} />
              <SpecificationInfo>Gasolina</SpecificationInfo>
            </Specification>
            <Specification>
              <GearIcon width={38} height={38} />
              <SpecificationInfo>Auto</SpecificationInfo>
            </Specification>
            <Specification>
              <UserIcon width={38} height={38} />
              <SpecificationInfo>2 pessoas</SpecificationInfo>
            </Specification>
          </Specifications>
          <ScheduleContainer>
            <DateContainer>
              <Title>DE</Title>
              <DateInfo>18 Julho 2020</DateInfo>
            </DateContainer>
            <ArrowRightIcon />
            <DateContainer>
              <Title>ATÉ</Title>
              <DateInfo>20 Julho 2020</DateInfo>
            </DateContainer>
          </ScheduleContainer>
        </Content>
      </Container>
      <Footer>
        <RowContainer>
          <PriceContainer>
            <Title>TOTAL</Title>
            <DayValue>R$ 580 x3 diárias</DayValue>
          </PriceContainer>
          <TotalValue>R$ 2,900</TotalValue>
        </RowContainer>

        <SubmitButton>
          <SubmitButtonText>Alugar agora</SubmitButtonText>
        </SubmitButton>
      </Footer>
    </>
  );
};
export default CarDetails;
