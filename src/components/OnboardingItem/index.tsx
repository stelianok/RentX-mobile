import React, {useCallback} from 'react';

import RedCalendar from '../../assets/icons/red_calendar.svg';
import RedCar from '../../assets/icons/red_car.svg';

import {Container, ScreenNumber} from './styles';

interface Props {
  iconName: 'RedCalendar' | 'RedCar' | 'Union';
  screenNumber: string;
}

const OnboardingItem: React.FC<Props> = ({iconName, screenNumber}) => {
  const renderIcon = useCallback((name: string) => {
    if (name === 'RedCalendar') {
      return <RedCalendar width={100} height={120} />;
    } else if (name === 'RedCar') {
      return <RedCar width={100} height={120} />;
    }
  }, []);

  return (
    <Container>
      {renderIcon(iconName)}
      {screenNumber !== undefined && (
        <ScreenNumber>{screenNumber}</ScreenNumber>
      )}
    </Container>
  );
};

export default OnboardingItem;
