import React, {useState, useEffect} from 'react';
import {useWindowDimensions} from 'react-native';

import {
  Container,
  Content,
  UnionIconContainer,
  IconContainer,
  TextArea,
  Title,
  Subtitle,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import Checked from '../../assets/icons/vcheck.svg';
import Union from '../../assets/icons/union.svg';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  modalVisibility: boolean;
  title: string;
  subtitle: string;
  buttonText: string;
  screenName?: string;
}
const SuccessModal: React.FC<IProps> = ({
  modalVisibility = false,
  title,
  subtitle,
  buttonText,
  screenName,
}) => {
  const width = useWindowDimensions().width;
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(modalVisibility);
  }, [modalVisibility]);

  return (
    <Container
      animationType="slide"
      transparent={false}
      statusBarTranslucent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible);
      }}>
      <Content>
        <UnionIconContainer>
          <Union width={width} height={270} />
        </UnionIconContainer>
        <IconContainer>
          <Checked width={35} height={35} />
        </IconContainer>
        <TextArea>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TextArea>
        <SubmitButton
          onPress={() => {
            setIsModalVisible(false);
            screenName !== undefined && navigation.navigate(screenName);
          }}>
          <SubmitButtonText>{buttonText}</SubmitButtonText>
        </SubmitButton>
      </Content>
    </Container>
  );
};
export default SuccessModal;
