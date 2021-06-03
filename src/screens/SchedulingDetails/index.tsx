import {StatusBar} from 'react-native';
import React, {useState, useCallback, useMemo} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import Specification from '../../components/Specification';
import Icon from 'react-native-vector-icons/Feather';

import FuelIcon from '../../components/FuelIcon';

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
  ScheduleButton,
  CalendarIcon,
  SpeedIcon,
  UpIcon,
  StrenghtIcon,
  GearIcon,
  UserIcon,
  ScheduleContainer,
  DateContainer,
  DateInfo,
  Footer,
  RowContainer,
  PriceContainer,
  DayValue,
  TotalValue,
  Divider,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import SuccessModal from '../SuccessModal';
import {ICar} from '../../dtos/car';

const SchedulingDetails: React.FC = () => {
  const navigator = useNavigation();
  const route = useRoute();

  const {brand, name, image, price, fuel_type, schedule} = route.params
    .car as ICar;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalVisibility = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleFuelName = useCallback(() => {
    if (fuel_type === 'eletric') {
      return 'Elétrico';
    }
    if (fuel_type === 'alcohol') {
      return 'Álcool';
    }
    return 'Gasolina';
  }, [fuel_type]);

  const totalPrice = useMemo(() => {
    return Number(price * schedule.numberOfDays).toPrecision(6);
  }, [price, schedule.numberOfDays]);

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
            onPress={() => {
              navigator.goBack();
            }}
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
            <CarImage source={image} resizeMode={'contain'} />
          </CarImageContainer>
          <CarBasicInfoContainer>
            <CarInfo>
              <Title>{brand}</Title>
              <Info>{name}</Info>
            </CarInfo>
            <CarInfo>
              <Title>AO DIA</Title>
              <DailyPrice>R$ {price}</DailyPrice>
            </CarInfo>
          </CarBasicInfoContainer>
          <Specifications>
            <Specification
              title={'380km/h'}
              Icon={() => <SpeedIcon width={30} height={30} />}
            />
            <Specification
              title={'3.2s'}
              Icon={() => <UpIcon width={30} height={30} />}
            />
            <Specification
              title={'800 HP'}
              Icon={() => <StrenghtIcon width={30} height={30} />}
            />
            <Specification
              title={handleFuelName()}
              Icon={() => (
                <FuelIcon name={fuel_type} size={30} color={'#47474d'} />
              )}
            />
            <Specification
              title={'Auto'}
              Icon={() => <GearIcon width={30} height={30} />}
            />
            <Specification
              title={'2 pessoas'}
              Icon={() => <UserIcon width={30} height={30} />}
            />
          </Specifications>
          <ScheduleContainer>
            <ScheduleButton
              onPress={() => {
                navigator.navigate('ChooseDate', {
                  previousRouteName: route.name,
                  car: route.params.car,
                });
              }}>
              <CalendarIcon width={30} height={30} />
            </ScheduleButton>
            <DateContainer>
              <Title>DE</Title>
              <DateInfo>{schedule.startDate}</DateInfo>
            </DateContainer>
            <Icon name={'chevron-right'} color={'#AEAEB3'} size={24} />
            <DateContainer>
              <Title>ATÉ</Title>
              <DateInfo>{schedule.endDate}</DateInfo>
            </DateContainer>
          </ScheduleContainer>
          <Divider />
          <RowContainer>
            <PriceContainer>
              <Title>TOTAL</Title>
              <DayValue>
                R$ {price} x{schedule.numberOfDays} diárias
              </DayValue>
            </PriceContainer>
            <TotalValue>R$ {totalPrice}</TotalValue>
          </RowContainer>
        </Content>
      </Container>
      <Footer>
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
export default SchedulingDetails;
