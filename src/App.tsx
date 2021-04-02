import React from 'react';
import {StatusBar} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';

const App: React.FC = () => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <WelcomeScreen />
    </>
  );
};
export default App;
