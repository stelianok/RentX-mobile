import React, {useState, useCallback} from 'react';
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
  FuelButton,
  EnergyIcon,
  FuelButtonText,
  FuelTypesContainer,
  GasIcon,
  LeafIcon,
  TransmissionContainer,
  TransmissionButton,
  TransmissionButtonText,
  SubmitButton,
  SubmitButtonText,
} from './styles';
import RangePicker from '../RangePicker';

const Filter: React.FC = () => {
  const [isGasFuel, setIsGasFuel] = useState(false);
  const [isAlcoholFuel, setIsAlcoholFuel] = useState(false);
  const [isEletricFuel, setIsEletricFuel] = useState(false);

  const [isAutomaticTransmission, setAutomaticTransmission] = useState(false);
  const [isManualTransmission, setManualTransmission] = useState(false);

  const [pricesPerDay, setPricesPerDay] = useState([120, 900]);

  const handleGasFuel = useCallback(() => {
    setIsGasFuel(true);

    setIsAlcoholFuel(false);
    setIsEletricFuel(false);
  }, []);

  const handleEletricFuel = useCallback(() => {
    setIsEletricFuel(true);

    setIsGasFuel(false);
    setIsAlcoholFuel(false);
  }, []);

  const handleAlcoholFuel = useCallback(() => {
    setIsAlcoholFuel(true);

    setIsEletricFuel(false);
    setIsGasFuel(false);
  }, []);

  const handleAutomaticTransmission = useCallback(() => {
    setAutomaticTransmission(true);
    setManualTransmission(false);
  }, []);

  const handleManualTransmission = useCallback(() => {
    setManualTransmission(true);
    setAutomaticTransmission(false);
  }, []);

  return (
    <FilterModal animationType="slide" visible={true} transparent>
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
        <FuelTypesContainer>
          <FuelButton
            android_ripple={{color: '#AEAEB3'}}
            onPress={() => {
              handleGasFuel();
            }}
            isActive={isGasFuel}>
            <GasIcon width={25} height={25} isActive={isGasFuel} />
            <FuelButtonText isActive={isGasFuel}>Gasolina</FuelButtonText>
          </FuelButton>
          <FuelButton
            android_ripple={{color: '#AEAEB3'}}
            onPress={() => {
              handleEletricFuel();
            }}
            isActive={isEletricFuel}>
            <EnergyIcon width={25} height={25} isActive={isEletricFuel} />
            <FuelButtonText isActive={isEletricFuel}>Elétrico</FuelButtonText>
          </FuelButton>
          <FuelButton
            android_ripple={{color: '#AEAEB3'}}
            onPress={() => {
              handleAlcoholFuel();
            }}
            isActive={isAlcoholFuel}>
            <LeafIcon width={25} height={25} isActive={isAlcoholFuel} />
            <FuelButtonText isActive={isAlcoholFuel}>Álcool</FuelButtonText>
          </FuelButton>
        </FuelTypesContainer>
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
        <SubmitButton android_ripple={{color: '#fff'}}>
          <SubmitButtonText>Confirmar</SubmitButtonText>
        </SubmitButton>
      </ModalContainer>
    </FilterModal>
  );
};

export default Filter;
