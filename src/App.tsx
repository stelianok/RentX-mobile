import React from 'react';
import {StatusBar} from 'react-native';
import SignIn from './screens/SignIn';

const App: React.FC = () => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <SignIn />
    </>
  );
};
export default App;
