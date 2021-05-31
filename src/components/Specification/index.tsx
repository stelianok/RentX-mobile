import React from 'react';

import {SpecificationContainer, SpecificationInfo} from './styles';

interface ISpecificationProps {
  Icon: any;
  title: string;
}
const Specification: React.FC<ISpecificationProps> = ({Icon, title}) => {
  return (
    <SpecificationContainer>
      {Icon()}
      <SpecificationInfo>{title}</SpecificationInfo>
    </SpecificationContainer>
  );
};

export default Specification;
