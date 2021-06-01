import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

import Speed from '../../assets/icons/speed.svg';
import Strenght from '../../assets/icons/strenght.svg';
import Up from '../../assets/icons/up.svg';
import User from '../../assets/icons/user.svg';
import Gas from '../../assets/icons/gas.svg';
import Gear from '../../assets/icons/gear.svg';
import Arrow from '../../assets/icons/arrow_right.svg';
import Calendar from '../../assets/icons/calendar.svg';

import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;

  padding: 20px;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BorderlessButton = styled.Pressable`
  justify-content: center;
  align-items: center;

  border-radius: 15px;

  padding: 4px;
`;
export const GoBackIcon = styled(Icon)``;
export const Pagination = styled.View`
  flex-direction: row;
`;

export const Dot = styled.Text`
  color: #47474d;
  font-size: 24px;
  margin-right: 3px;
`;

export const InactiveDot = styled.Text`
  color: #aeaeb3;
  font-size: 24px;

  margin-right: 3px;
  margin-left: 3px;
`;

export const Content = styled.View`
  flex: 1;

  justify-content: space-around;
`;
export const CarImageContainer = styled.View`
  align-self: center;

  height: 125px;

  margin-top: 25px;
  margin-bottom: 10px;
`;
export const CarImage = styled.Image`
  flex: 1;
`;
export const CarBasicInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const CarInfo = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;
export const Title = styled.Text`
  font-family: 'ArchivoNarrow-Medium';
  font-size: 12px;
  color: #aeaeb3;
`;
export const Info = styled.Text`
  font-family: 'ArchivoNarrow-Medium';
  font-size: 28px;
  color: #47474d;
`;

export const DailyPrice = styled.Text`
  font-family: 'ArchivoNarrow-Medium';
  font-size: 25px;
  color: #dc1637;
`;

export const Specifications = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

export const SpeedIcon = styled(Speed)``;
export const UpIcon = styled(Up)``;
export const StrenghtIcon = styled(Strenght)``;
export const FuelIcon = styled(Gas)`
  color: #47474d;
`;
export const GearIcon = styled(Gear)``;
export const UserIcon = styled(User)`
  color: #47474d;
`;

export const CalendarIcon = styled(Calendar)`
  color: #fff;
`;

export const ScheduleButton = styled(RectButton)`
  background-color: #dc1637;

  justify-content: center;
  align-items: center;
  padding: 14px;
`;

export const ScheduleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;

  margin-left: 5px;
  margin-right: 5px;
`;

export const DateContainer = styled.View``;

export const DateInfo = styled.Text`
  font-family: 'Inter-Medium';
  font-size: 15px;
  color: #47474d;

  margin-top: 5px;
`;

export const ArrowRightIcon = styled(Arrow)``;

export const Footer = styled.View`
  background-color: #f4f5f6;
  justify-content: flex-start;
  width: 100%;

  padding: 20px;
`;

export const RowContainer = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-top: 20px;

  margin-left: 5px;
  margin-right: 5px;
`;

export const PriceContainer = styled.View``;

export const DayValue = styled.Text`
  font-family: 'Inter-Medium';
  font-size: 15px;
  color: #47474d;
`;
export const TotalValue = styled.Text`
  font-family: 'ArchivoNarrow-Medium';
  font-size: 24px;
  text-align: right;
  color: #03b252;
`;

export const Divider = styled.View`
  width: 98%;
  height: 1px;

  background-color: #ebebf0;

  align-self: center;

  margin-top: 25px;
`;

export const SubmitButton = styled.Pressable`
  background-color: #03b252;
  width: 100%;

  justify-content: center;
  align-items: center;

  height: 55px;
`;
export const SubmitButtonText = styled.Text`
  color: #fff;
  font-family: 'Inter-Regular';
  font-size: 18px;
`;
