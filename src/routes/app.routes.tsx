import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignIn from '../screens/SignIn';
import SignUpChooseNameAndEmail from '../screens/SignUpChooseNameAndEmail';
import SignUpChoosePassword from '../screens/SignUpChoosePassword';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <App.Screen name="Onboarding" component={OnboardingScreen} />
    <App.Screen name="Welcome" component={WelcomeScreen} />
    <App.Screen name="SignIn" component={SignIn} />
    <App.Screen
      name="SignUp01"
      component={SignUpChooseNameAndEmail}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    />
    <App.Screen
      name="SignUp02"
      component={SignUpChoosePassword}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    />
  </App.Navigator>
);

export default AppRoutes;
