import React, {useCallback} from 'react';
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
}

const CarCard: React.FC<ICarProps> = ({
  brand,
  name,
  image,
  price,
  fuel_type,
}) => {
  const navigation = useNavigation();

  const car: ICarProps = {
    brand,
    name,
    image,
    price,
    fuel_type,
  };

  return (
    <Container
      android_ripple={{color: '#aeaeb3'}}
      onLongPress={() => {
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
