/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import Onboarding from 'react-native-onboarding-swiper';
import OnboardingItem from '../../components/OnboardingItem';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  title: {
    color: '#47474D',
    fontFamily: 'ArchivoNarrow-Bold',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'left',

    marginLeft: 30,
    marginRight: 150,
  },
  subtitle: {
    color: '#7A7A80',

    fontFamily: 'Inter-Regular',
    fontSize: 15,

    textAlign: 'left',
    marginLeft: 30,
    marginRight: 130,
  },
});
const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Onboarding
      nextLabel={<Icon name={'chevron-right'} size={24} color={'#AEAEB3'} />}
      bottomBarHighlight={false}
      showSkip={false}
      containerStyles={{
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
      transitionAnimationDuration={500}
      titleStyles={styles.title}
      subTitleStyles={styles.subtitle}
      allowFontScaling={false}
      controlStatusBar={false}
      onDone={() => navigation.navigate('Welcome')}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <OnboardingItem iconName={'RedCalendar'} screenNumber={'01'} />
          ),
          title: 'Primeiro,\nescolha a data',
          subtitle:
            'Você é quem define um período, e nós mostraremos' +
            'os carros disponíveis',
        },
        {
          backgroundColor: '#fff',
          image: <OnboardingItem iconName={'RedCar'} screenNumber={'02'} />,
          title: 'Depois,\nescolha o carro',
          subtitle:
            'Vários modelos para você dirigir seguro, com conforto e segurança.',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
