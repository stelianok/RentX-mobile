import React, {ReactSVG, useCallback, useEffect, useState} from 'react';
import {
  Container,
  SubmitButton,
  Header,
  TextArea,
  Subtitle,
  Name,
  Price,
  ImageContainer,
  Footer,
  CarImg,
  EnergyIcon,
  LeafIcon,
  GasIcon,
  Pagination,
  Dot,
  InactiveDot,
} from './styles';

interface IProps {
  brand: string;
  name: string;
  image: any;
  price: number;
  fuel_type?: 'eletric' | 'gas' | 'alcohol';
}

const CarCard: React.FC<IProps> = ({brand, name, image, price, fuel_type}) => {
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
    <SubmitButton android_ripple={{color: '#aeaeb3'}}>
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
        {ChooseIcon()}
        <Pagination>
          <Dot>•</Dot>
          <InactiveDot>•</InactiveDot>
          <InactiveDot>•</InactiveDot>
          <InactiveDot>•</InactiveDot>
        </Pagination>
      </Footer>
    </SubmitButton>
  );
};
export default CarCard;
