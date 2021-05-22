import React, {useState, useEffect} from 'react';
import {useWindowDimensions} from 'react-native';

import {
  Container,
  Content,
  UnionIconContainer,
  TextArea,
  Title,
  Subtitle,
  ButtonRow,
  RedButton,
  BlackButton,
  ButtonText,
} from './styles';

import Cross from '../../assets/icons/cross.svg';
import Union from '../../assets/icons/union.svg';

interface IProps {
  modalVisibility: boolean;
  title: string;
  subtitle: string;
}
const QuitModal: React.FC<IProps> = ({
  modalVisibility = false,
  title,
  subtitle,
}) => {
  const width = useWindowDimensions().width;
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
        setIsModalVisible(false);
      }}>
      <Content>
        <UnionIconContainer>
          <Union width={width} height={270} />
        </UnionIconContainer>
        <Cross width={90} height={90} />
        <TextArea>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TextArea>
        <ButtonRow>
          <RedButton
            onPress={() => {
              setIsModalVisible(false);
            }}>
            <ButtonText>Não</ButtonText>
          </RedButton>
          <BlackButton
            onPress={() => {
              setIsModalVisible(false);
            }}>
            <ButtonText>Sim</ButtonText>
          </BlackButton>
        </ButtonRow>
      </Content>
    </Container>
  );
};
export default QuitModal;
