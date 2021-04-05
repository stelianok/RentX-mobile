import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Header, GoBackButton} from './styles';

const GoBackHeader: React.FC = () => {
  return (
    <Container>
      <Header>
        <GoBackButton>
          <Icon name={'chevron-left'} size={24} color={'#AEAEB3'} />
        </GoBackButton>
      </Header>
    </Container>
  );
};

export default GoBackHeader;
