import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  InputContainer,
  IconContainer,
  InputText,
  ChangePasswordVisibilityButton,
} from './styles';

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  IconComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  isPassword?: boolean;
}
const Input: React.FC<Props> = ({
  text,
  setText,
  placeholder,
  IconComponent,
  isPassword,
}) => {
  return (
    <Container>
      <InputContainer>
        <IconContainer>
          <IconComponent width={28} height={28} />
        </IconContainer>
        <InputText
          placeholder={placeholder}
          placeholderTextColor={'#AEAEB3'}
          secureTextEntry={isPassword ? true : false}
          onChangeText={value => setText(value)}
          value={text}
        />
        {isPassword && (
          <ChangePasswordVisibilityButton
            onPress={() => {
              console.log('lol');
            }}>
            <IconContainer>
              <Icon name={'eye'} size={28} color={'#47474d'} />
            </IconContainer>
          </ChangePasswordVisibilityButton>
        )}
      </InputContainer>
    </Container>
  );
};
export default Input;
