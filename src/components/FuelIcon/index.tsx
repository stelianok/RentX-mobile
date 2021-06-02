import React, {useCallback} from 'react';
import {EnergyIcon, GasIcon, LeafIcon} from './styles';

interface IFuelTypeProps {
  name?: 'eletric' | 'gas' | 'alcohol';
  size?: number;
  color?: string;
}

const FuelIcon: React.FC<IFuelTypeProps> = ({
  name = 'gas',
  size = 24,
  color = '#aeaeb3',
}) => {
  const getFuelType = useCallback(
    fuel_type => {
      if (fuel_type === 'eletric') {
        return <EnergyIcon width={size} height={size} color={color} />;
      }
      if (fuel_type === 'alcohol') {
        return <LeafIcon width={size} height={size} color={color} />;
      }

      return <GasIcon width={size} height={size} color={color} />;
    },
    [color, size],
  );

  return getFuelType(name);
};

export default FuelIcon;
