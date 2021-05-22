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
  const navigation = useNavigation();
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
    <Container
      android_ripple={{color: '#aeaeb3'}}
      onLongPress={() => {
        navigation.navigate('CarDetails');
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
        {ChooseIcon()}
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
