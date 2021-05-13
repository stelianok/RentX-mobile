import React, {useState, useCallback} from 'react';
import {ModalBaseProps} from 'react-native';

import {
  FilterModal,
  ModalContainer,
  ModalTitle,
  TopDivider,
  CleanPreferencesButton,
  CleanPreferencesText,
  Section,
  ModalText,
  ModalDivider,
  PricePerDay,
  TransmissionContainer,
  TransmissionButton,
  TransmissionButtonText,
} from './styles';
import RangePicker from '../RangePicker';
import ChooseFuelButton from './components/ChooseFuelButton';

interface IProps extends ModalBaseProps {}

const Filter: React.FC<IProps> = ({children, ...rest}) => {
  const [isAutomaticTransmission, setAutomaticTransmission] = useState(false);
  const [isManualTransmission, setManualTransmission] = useState(false);

  const [pricesPerDay, setPricesPerDay] = useState([120, 900]);

  const handleAutomaticTransmission = useCallback(() => {
    setAutomaticTransmission(true);
    setManualTransmission(false);
  }, []);

  const handleManualTransmission = useCallback(() => {
    setManualTransmission(true);
    setAutomaticTransmission(false);
  }, []);

  return (
    <FilterModal {...rest}>
      <ModalContainer>
        <TopDivider />
        <Section>
          <ModalTitle>Filtro</ModalTitle>
          <CleanPreferencesButton>
            <CleanPreferencesText>Limpar todos</CleanPreferencesText>
          </CleanPreferencesButton>
        </Section>
        <ModalDivider />
        <Section>
          <ModalText>Preço ao dia</ModalText>
          <PricePerDay>
            R${pricesPerDay[0]} - R${pricesPerDay[1]}
          </PricePerDay>
        </Section>
        <RangePicker
          rangeArray={pricesPerDay}
          setRangeArray={setPricesPerDay}
          sliderLength={320}
          min={120}
          max={900}
          step={10}
        />

        <ModalText>Combustível</ModalText>
        <ChooseFuelButton />

        <ModalText>Transmissão</ModalText>
        <TransmissionContainer>
          <TransmissionButton
            android_ripple={{color: '#AEAEB3'}}
            onPress={() => {
              handleAutomaticTransmission();
            }}
            isActive={isAutomaticTransmission}>
            <TransmissionButtonText>Automático</TransmissionButtonText>
          </TransmissionButton>
          <TransmissionButton
            android_ripple={{color: '#AEAEB3'}}
            onPress={() => {
              handleManualTransmission();
            }}
            isActive={isManualTransmission}>
            <TransmissionButtonText>Manual</TransmissionButtonText>
          </TransmissionButton>
        </TransmissionContainer>
        {children}
      </ModalContainer>
    </FilterModal>
  );
};

export default Filter;
