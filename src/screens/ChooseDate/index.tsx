import {useNavigation} from '@react-navigation/native';
import {addDays, format} from 'date-fns';
import React, {useState, useCallback} from 'react';
import {Alert, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Calendar, {DayProps, MarkedDateProps} from '../../components/Calendar';
import {generateInterval} from '../../components/Calendar/generateInterval';

import {
  Container,
  TopBar,
  GoBackButton,
  Header,
  Title,
  ArrowRightIcon,
  DatesContainer,
  DateInputContainer,
  DateInputTitle,
  DateInput,
  CalendarContainer,
  Footer,
  SubmitButton,
  SubmitButtonText,
} from './styles';

interface RentalPeriod {
  start: number;
  end: number;
  startFormatted: string;
  endFormatted: string;
}

const ChooseDate: React.FC = () => {
  const navigator = useNavigation();
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps,
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps,
  );

  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod,
  );

  const handleGoBack = useCallback(() => {
    navigator.goBack();
  }, [navigator]);

  const handleConfirmRental = useCallback(() => {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      Alert.alert('selecione o intervalo para alugar');
    } else {
      navigator.navigate('MainRoutes', {
        startDate: rentalPeriod.startFormatted,
        endDate: rentalPeriod.endFormatted,
      });
    }
  }, [navigator, rentalPeriod.endFormatted, rentalPeriod.startFormatted]);

  const handleChangeDate = useCallback(
    (date: DayProps) => {
      let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
      let end = date;

      if (start.timestamp > end.timestamp) {
        start = end;
        end = start;
      }

      setLastSelectedDate(end);

      const interval = generateInterval(start, end);
      setMarkedDates(interval);

      const firstDate = Object.keys(interval)[0];
      const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

      setRentalPeriod({
        start: start.timestamp,
        end: end.timestamp,
        startFormatted: format(addDays(new Date(firstDate), 1), 'dd/MM/yyyy'),
        endFormatted: format(addDays(new Date(endDate), 1), 'dd/MM/yyyy'),
      });
    },
    [lastSelectedDate],
  );
  return (
    <>
      <StatusBar backgroundColor={'#29292e'} barStyle={'light-content'} />
      <Container>
        <Header>
          <TopBar>
            <GoBackButton
              android_ripple={{borderless: true, radius: 15, color: '#7A7A80'}}
              onPress={() => {
                handleGoBack();
              }}>
              <Icon name={'chevron-left'} size={24} color={'#fff'} />
            </GoBackButton>
          </TopBar>
          <Title>Escolha a data e encontre um carro.</Title>
          <DatesContainer>
            <DatesContainer>
              <DateInputContainer>
                <DateInputTitle>DE</DateInputTitle>
                <DateInput
                  placeholderTextColor={'#7A7A80'}
                  underlineColorAndroid={'#7A7A80'}
                  value={rentalPeriod.startFormatted}
                />
              </DateInputContainer>

              <ArrowRightIcon width={40} height={16} />

              <DateInputContainer>
                <DateInputTitle>ATÉ</DateInputTitle>
                <DateInput
                  placeholderTextColor={'#7A7A80'}
                  underlineColorAndroid={'#7A7A80'}
                  value={rentalPeriod.endFormatted}
                />
              </DateInputContainer>
            </DatesContainer>
          </DatesContainer>
        </Header>
        <CalendarContainer>
          <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
        </CalendarContainer>
        <Footer>
          <SubmitButton
            onPress={() => {
              handleConfirmRental();
            }}>
            <SubmitButtonText>Confirmar</SubmitButtonText>
          </SubmitButton>
        </Footer>
      </Container>
    </>
  );
};

export default ChooseDate;
