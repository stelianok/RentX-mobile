import {addDays, eachDayOfInterval, format} from 'date-fns';

import {MarkedDateProps, DayProps} from '.';

export function generateInterval(start: DayProps, end: DayProps) {
  let interval: MarkedDateProps = {};

  eachDayOfInterval({
    start: addDays(new Date(start.timestamp), 1),
    end: addDays(new Date(end.timestamp), 1),
  }).forEach(item => {
    const date = format(item, 'yyyy-MM-dd');

    interval = {
      ...interval,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? '#dc1637'
            : '#FF99AA',

        textColor:
          start.dateString === date || end.dateString === date
            ? '#fff'
            : '#dc1637',
      },
    };
  });

  return interval;
}
