import {addDays, format} from 'date-fns';
import React, {useState, useCallback} from 'react';
import {StatusBar} from 'react-native';
import Calendar, {DayProps, MarkedDateProps} from '../../components/Calendar';
import {generateInterval} from '../../components/Calendar/generateInterval';

import {
  Container,
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
  startFormatted: string;
  end: number;
  endFormatted: string;
}

const ChooseDate: React.FC = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps,
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps,
  );

  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod,
  );

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
          <SubmitButton>
            <SubmitButtonText>Confirmar</SubmitButtonText>
          </SubmitButton>
        </Footer>
      </Container>
    </>
  );
};

export default ChooseDate;
