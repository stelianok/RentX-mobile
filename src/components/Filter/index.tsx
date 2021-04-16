import React, {useState, useCallback} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {
  FilterModal,
  ModalContainer,
  ModalTitle,
  TopDivider,
  CleanPreferencesButton,
  CleanPreferencesText,
  Section,
  SliderContainer,
  SliderMarker,
  SliderMarkerColumn,
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
import {Text, View} from 'react-native';

const Filter: React.FC = () => {
  const [isGasFuel, setIsGasFuel] = useState(false);
  const [isAlcoholFuel, setIsAlcoholFuel] = useState(false);
  const [isEletricFuel, setIsEletricFuel] = useState(false);

  const [isAutomaticTransmission, setAutomaticTransmission] = useState(false);
  const [isManualTransmission, setManualTransmission] = useState(false);

  const [minPricePerDay, setMinPricePerDay] = useState(100);
  const [maxPricePerDay, setMaxPricePerDay] = useState(975);
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

  const handleSliderValueChange = useCallback((values: Array<Number>) => {
    setPricesPerDay(values);
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
        <SliderContainer>
          <MultiSlider
            values={[pricesPerDay[0], pricesPerDay[1]]}
            sliderLength={320}
            onValuesChange={handleSliderValueChange}
            min={120}
            max={900}
            step={10}
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
          />
        </SliderContainer>

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
