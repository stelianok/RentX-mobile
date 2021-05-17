import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Dimensions} from 'react-native';

import HomeIcon from '../assets/icons/home.svg';
import CarIcon from '../assets/icons/car.svg';
import CalendarIcon from '../assets/icons/calendar.svg';
import UserIcon from '../assets/icons/user.svg';

import Home from '../screens/Home';
import ListCars from '../screens/ListCars';
import ScheduleCars from '../screens/ScheduleCars';
import Profile from '../screens/Profile';

const BottomTab = createMaterialTopTabNavigator();
const width = Dimensions.get('window').width;
const MainRoutes: React.FC = () => {
  return (
    <BottomTab.Navigator
      initialLayout={{width: width}}
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#DC1637',
        inactiveTintColor: '#AEAEB3',
        showIcon: true,
        showLabel: false,

        iconStyle: {
          justifyContent: 'center',
          alignItems: 'center',

          marginBottom: 8,
        },
        style: {
          borderColor: '#EBEBF0',
          borderTopWidth: 2,
        },

        indicatorStyle: {
          backgroundColor: '#DC1637',

          width: 33,
          marginBottom: 13,

          flex: 1,
          left: '8.5%',
          height: 2,
        },
      }}
      tabBarPosition={'bottom'}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '•',
          tabBarIcon: ({color}) => (
            <HomeIcon width={24} height={24} style={{color: color}} />
          ),
        }}
      />
      <BottomTab.Screen
        name="List"
        component={ListCars}
        options={{
          tabBarLabel: '•',
          tabBarIcon: ({color}) => (
            <CarIcon width={24} height={24} style={{color: color}} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Schedule"
        component={ScheduleCars}
        options={{
          tabBarLabel: '•',
          tabBarIcon: ({color}) => (
            <CalendarIcon width={24} height={24} style={{color: color}} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '•',
          tabBarIcon: ({color}) => (
            <UserIcon width={24} height={24} style={{color: color}} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
export default MainRoutes;
