import React, {useCallback, useEffect, useState} from 'react';
import {TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  InputContainer,
  IconContainer,
  InputText,
  ChangePasswordVisibilityButton,
} from './styles';

interface InputProps extends TextInputProps {
  IconComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}
const PasswordInput: React.FC<InputProps> = ({IconComponent, ...rest}) => {
  const [isPasswordProtected, setIsPasswordProtected] = useState(true);
  const [eyeIconName, setEyeIconName] = useState('eye');

  const handleEyeIcon = useCallback(() => {
    isPasswordProtected ? setEyeIconName('eye') : setEyeIconName('eye-off');
  }, [isPasswordProtected]);

  const handlePasswordVisibility = useCallback(() => {
    setIsPasswordProtected(!isPasswordProtected);
  }, [isPasswordProtected]);

  useEffect(() => {
    handleEyeIcon();
  }, [handleEyeIcon]);

  return (
    <Container>
      <InputContainer>
        <IconContainer>
          <IconComponent width={28} height={28} />
        </IconContainer>
        <InputText
          placeholderTextColor={'#AEAEB3'}
          secureTextEntry={isPasswordProtected}
          {...rest}
        />
        <ChangePasswordVisibilityButton onPress={handlePasswordVisibility}>
          <IconContainer>
            <Icon name={eyeIconName} size={28} color={'#47474d'} />
          </IconContainer>
        </ChangePasswordVisibilityButton>
      </InputContainer>
    </Container>
  );
};
export default PasswordInput;
