import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {Calendar as CustomCalendar, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Ja',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
  today: 'Hoje',
};

LocaleConfig.defaultLocale = 'pt-br';

export function Calendar() {
  return (
    <CustomCalendar
      renderArrow={direction => (
        <Feather
          size={24}
          color={'#7A7A80'}
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      )}
      headerStyle={{
        borderBottomWidth: 1,
        borderBottomColor: '#EBEBF0',
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: 'Inter-Regular',
        textDayHeaderFontFamily: 'ArchivoNarrow-SemiBold',
        textMonthFontFamily: 'ArchivoNarrow-SemiBold',
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        monthTextColor: '#47474D',
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={new Date()}
    />
  );
}
