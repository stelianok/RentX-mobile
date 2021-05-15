import React, {useCallback} from 'react';
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
  EnergyIcon,
  LeafIcon,
  GasIcon,
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
  );
};
export default CarCardLean;
