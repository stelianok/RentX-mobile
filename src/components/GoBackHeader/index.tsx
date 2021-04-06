import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Container, GoBackButton, Pagination, Dot} from './styles';

interface IProps {
  numberOfScreens?: number;
  currentActiveScreenIndex?: number;
}
const GoBackHeader: React.FC<IProps> = ({
  numberOfScreens = 1,
  currentActiveScreenIndex = 1,
}) => {
  const navigation = useNavigation();
  const [dots, setDots] = useState<Number[]>([]);
  const fillRange = (start: number, end: number) => {
    return Array(end - start + 1)
      .fill(10)
      .map((item, index) => start + index);
  };
  const generateDotArray = useCallback(() => {
    let filledArray = fillRange(0, numberOfScreens - 1);
    setDots(filledArray);
  }, [numberOfScreens]);

  useEffect(() => {
    generateDotArray();
  }, [generateDotArray]);
  return (
    <Container>
      <GoBackButton onPress={() => navigation.goBack()}>
        <Icon name={'chevron-left'} size={24} color={'#AEAEB3'} />
      </GoBackButton>
      {numberOfScreens > 1 && (
        <Pagination>
          {dots.map(index => (
            <Dot
              key={Number(index)}
              isActive={
                Number(index) === currentActiveScreenIndex - 1 ? true : false
              }>
              •
            </Dot>
          ))}
        </Pagination>
      )}
    </Container>
  );
};

export default GoBackHeader;
