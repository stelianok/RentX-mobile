import React, {useState} from 'react';
import {Alert, useWindowDimensions} from 'react-native';

import {
  Container,
  Content,
  IconContainer,
  Title,
  Subtitle,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import Checked from '../../assets/icons/vcheck.svg';
import Union from '../../assets/icons/union.svg';

const SuccessModal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const width = useWindowDimensions().width;

  return (
    <Container
      animationType="slide"
      transparent={false}
      statusBarTranslucent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setIsModalVisible(!isModalVisible);
      }}>
      <Content>
        <Union width={width} height={235} />
      </Content>
    </Container>
  );
};
export default SuccessModal;
