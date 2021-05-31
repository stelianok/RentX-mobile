import React from 'react';
import {StatusBar} from 'react-native';
import {Text} from 'react-native-svg';
import {Calendar} from '../../components/Calendar';
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

const ChooseDate: React.FC = () => {
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
                  placeholder={'Teste'}
                  placeholderTextColor={'#7A7A80'}
                  underlineColorAndroid={'#7A7A80'}
                />
              </DateInputContainer>

              <ArrowRightIcon width={40} height={16} />

              <DateInputContainer>
                <DateInputTitle>ATÉ</DateInputTitle>
                <DateInput
                  placeholder={'Teste'}
                  placeholderTextColor={'#7A7A80'}
                  underlineColorAndroid={'#7A7A80'}
                />
              </DateInputContainer>
            </DatesContainer>
          </DatesContainer>
        </Header>
        <CalendarContainer>
          <Calendar />
        </CalendarContainer>
        <Footer>
          <SubmitButton enabled={false}>
            <SubmitButtonText>Confirmar</SubmitButtonText>
          </SubmitButton>
        </Footer>
      </Container>
    </>
  );
};

export default ChooseDate;
