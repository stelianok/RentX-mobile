/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback} from 'react';
import MultiSlider, {
  MultiSliderProps,
} from '@ptomasroos/react-native-multi-slider';

import {SliderContainer, SliderMarker, SliderMarkerColumn} from './styles';

interface IProps extends MultiSliderProps {
  rangeArray: Array<number>;
  setRangeArray: React.Dispatch<React.SetStateAction<number[]>>;
}
const RangePicker: React.FC<IProps> = ({
  rangeArray,
  setRangeArray,
  sliderLength,
  min,
  max,
  step,
  ...rest
}) => {
  const handleSliderValueChange = useCallback(
    (values: Array<number>) => {
      setRangeArray(values);
    },
    [setRangeArray],
  );

  return (
    <SliderContainer>
      <MultiSlider
        values={[rangeArray[0], rangeArray[1]]}
        sliderLength={sliderLength}
        onValuesChange={handleSliderValueChange}
        min={min}
        max={max}
        step={step}
        selectedStyle={{backgroundColor: '#dc1637', height: 4}}
        unselectedStyle={{backgroundColor: '#F4F5F6', height: 4}}
        customMarker={() => {
          return (
            <SliderMarker
              style={{
                shadowColor: '#000',
                shadowOffset: {width: 1, height: 1},
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 8,
              }}>
              <SliderMarkerColumn />
              <SliderMarkerColumn />
            </SliderMarker>
          );
        }}
        {...rest}
      />
    </SliderContainer>
  );
};

export default RangePicker;
