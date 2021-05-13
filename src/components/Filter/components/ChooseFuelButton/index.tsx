import React, {useState, useCallback} from 'react';
import {
  FuelButton,
  EnergyIcon,
  FuelButtonText,
  FuelTypesContainer,
  GasIcon,
  LeafIcon,
} from './styles';

const ChooseFuelButton: React.FC = () => {
  const [isGasFuel, setIsGasFuel] = useState(false);
  const [isAlcoholFuel, setIsAlcoholFuel] = useState(false);
  const [isEletricFuel, setIsEletricFuel] = useState(false);

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

  return (
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
  );
};
export default ChooseFuelButton;
