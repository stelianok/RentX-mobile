import React from 'react';
import FuelIcon from '../FuelIcon';
import {
  Container,
  CarInfo,
  TextArea,
  Subtitle,
  Name,
  Price,
  ImageContainer,
  IconContainer,
  CarImg,
  RowContainer,
} from './styles';

interface IProps {
  brand: string;
  name: string;
  image: any;
  price: number;
  fuel_type?: 'eletric' | 'gas' | 'alcohol';
}

const CarCardLean: React.FC<IProps> = ({
  brand,
  name,
  image,
  price,
  fuel_type,
}) => {
  return (
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
            <FuelIcon name={fuel_type} size={25} />
          </IconContainer>
        </RowContainer>
      </CarInfo>
      <ImageContainer>
        <CarImg source={image} resizeMode={'contain'} />
      </ImageContainer>
    </Container>
  );
};
export default CarCardLean;
