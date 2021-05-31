import {StatusBar} from 'react-native';
import React, {useState, useCallback} from 'react';

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
  SpeedIcon,
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
import SuccessModal from '../SuccessModal';
import Specification from '../../components/Specification';

const CarDetails: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalVisibility = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Container>
        <SuccessModal
          title={'Carro alugado!'}
          subtitle={
            'Agora você só precisa ir até a concessionária da RENTX pegar o seu automóvel.'
          }
          buttonText={'Ok'}
          modalVisibility={isModalVisible}
        />
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
            <Specification
              title={'380km/h'}
              Icon={() => <SpeedIcon width={38} height={38} />}
            />
            <Specification
              title={'3.2s'}
              Icon={() => <UpIcon width={38} height={38} />}
            />
            <Specification
              title={'800 HP'}
              Icon={() => <StrenghtIcon width={38} height={38} />}
            />
            <Specification
              title={'Gasolina'}
              Icon={() => <FuelIcon width={38} height={38} />}
            />
            <Specification
              title={'Auto'}
              Icon={() => <GearIcon width={38} height={38} />}
            />
            <Specification
              title={'2 pessoas'}
              Icon={() => <UserIcon width={38} height={38} />}
            />
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

        <SubmitButton
          android_ripple={{color: '#fff'}}
          onPress={() => {
            handleModalVisibility();
          }}>
          <SubmitButtonText>Alugar agora</SubmitButtonText>
        </SubmitButton>
      </Footer>
    </>
  );
};
export default CarDetails;
