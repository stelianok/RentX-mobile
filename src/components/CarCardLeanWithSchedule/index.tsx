import React, {useState, useCallback} from 'react';
import {
  CarInfo,
  TextArea,
  Subtitle,
  Name,
  Price,
  ImageContainer,
  IconContainer,
  CarImg,
  EnergyIcon,
  LeafIcon,
  GasIcon,
  RowContainer,
  Container,
  Footer,
  TodaySchedule,
  TodayScheduleTitle,
  ScheduleTitle,
  ScheduleDateContainer,
  ScheduleDate,
  ArrowIcon,
} from './styles';

interface IProps {
  brand: string;
  name: string;
  image: any;
  price: number;
  fuel_type?: 'eletric' | 'gas' | 'alcohol';
  isDateEqualsToday: boolean;
}

const CarCardLeanWithSchedule: React.FC<IProps> = ({
  brand,
  name,
  image,
  price,
  fuel_type,
  isDateEqualsToday,
}) => {
  const ChooseIcon = useCallback(() => {
    if (fuel_type === 'eletric') {
      return <EnergyIcon width={25} height={25} />;
    }
    if (fuel_type === 'alcohol') {
      return <LeafIcon width={25} height={25} />;
    }

    return <GasIcon width={25} height={25} />;
  }, [fuel_type]);

  return (
    <>
      <Container android_ripple={{color: '#aeaeb3'}}>
        <CarInfo>
          <TextArea>
            <Subtitle>{brand}</Subtitle>
            <Name>{name}</Name>
          </TextArea>
          <RowContainer>
            <TextArea>
              <Subtitle>AO DIA</Subtitle>
              <Price>R$ {price}</Price>
            </TextArea>
            <IconContainer>{ChooseIcon()}</IconContainer>
          </RowContainer>
        </CarInfo>
        <ImageContainer>
          <CarImg source={image} resizeMode={'contain'} />
        </ImageContainer>
      </Container>
      <Footer isDateEqualsToday={isDateEqualsToday}>
        {isDateEqualsToday ? (
          <TodayScheduleTitle>Utilizando até 27 de maio</TodayScheduleTitle>
        ) : (
          <>
            <ScheduleTitle>PERÍODO</ScheduleTitle>
            <ScheduleDateContainer>
              <ScheduleDate>18 Junho 2021</ScheduleDate>
              <ArrowIcon width={24} height={24} />
              <ScheduleDate>25 Junho 2021</ScheduleDate>
            </ScheduleDateContainer>
          </>
        )}
      </Footer>
    </>
  );
};
export default CarCardLeanWithSchedule;
