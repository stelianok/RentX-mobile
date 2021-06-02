import React, {useCallback} from 'react';
import FuelIcon from '../FuelIcon';
import {
  CarInfo,
  TextArea,
  Subtitle,
  Name,
  Price,
  ImageContainer,
  IconContainer,
  CarImg,
  RowContainer,
  Container,
  Footer,
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
            <IconContainer>
              <FuelIcon name={fuel_type} size={24} />
            </IconContainer>
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
