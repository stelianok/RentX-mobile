import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Header,
  TextArea,
  Subtitle,
  Name,
  Price,
  ImageContainer,
  Footer,
  CarImg,
  Pagination,
  Dot,
  InactiveDot,
} from './styles';
import FuelIcon from '../FuelIcon';

interface ICarProps {
  brand: string;
  name: string;
  image: any;
  price: number;
  fuel_type?: 'eletric' | 'gas' | 'alcohol';
  schedule: Schedule;
}

interface Schedule {
  startDate: Date;
  endDate: Date;
  numberOfDays: number;
}
const CarCard: React.FC<ICarProps> = ({
  brand,
  name,
  image,
  price,
  fuel_type,
  schedule,
}) => {
  const navigation = useNavigation();

  const car: ICarProps = {
    brand,
    name,
    image,
    price,
    fuel_type,
    schedule,
  };

  return (
    <Container
      android_ripple={{color: '#aeaeb3'}}
      onPress={() => {
        navigation.navigate('SchedulingDetails', {
          car,
        });
      }}>
      <Header>
        <TextArea>
          <Subtitle>{brand}</Subtitle>
          <Name>{name}</Name>
        </TextArea>
        <TextArea>
          <Subtitle>AO DIA</Subtitle>
          <Price>R$ {price}</Price>
        </TextArea>
      </Header>
      <ImageContainer>
        <CarImg source={image} resizeMode={'contain'} />
      </ImageContainer>
      <Footer>
        <FuelIcon name={fuel_type} size={24} />
        <Pagination>
          <Dot>•</Dot>
          <InactiveDot>•</InactiveDot>
          <InactiveDot>•</InactiveDot>
          <InactiveDot>•</InactiveDot>
        </Pagination>
      </Footer>
    </Container>
  );
};
export default CarCard;
