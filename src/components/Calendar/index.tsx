/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {
  Calendar as CustomCalendar,
  DateCallbackHandler,
  LocaleConfig,
} from 'react-native-calendars';
import ptBR from './localeConfig';

LocaleConfig.locales['pt-br'] = ptBR;

LocaleConfig.defaultLocale = 'pt-br';

export interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

export interface DayProps {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}

interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress: DateCallbackHandler;
}

export default function Calendar({markedDates, onDayPress}: CalendarProps) {
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
        textDayHeaderFontSize: 12,
        textMonthFontSize: 25,
        monthTextColor: '#47474D',
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={new Date()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}
