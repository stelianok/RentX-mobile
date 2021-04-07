import React from 'react';
import {TextInputProps} from 'react-native';

import {Container, InputContainer, IconContainer, InputText} from './styles';

interface InputProps extends TextInputProps {
  IconComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}
const Input: React.FC<InputProps> = ({IconComponent, ...rest}) => {
  return (
    <Container>
      <InputContainer>
        <IconContainer>
          <IconComponent width={28} height={28} />
        </IconContainer>
        <InputText placeholderTextColor={'#AEAEB3'} {...rest} />
      </InputContainer>
    </Container>
  );
};
export default Input;
