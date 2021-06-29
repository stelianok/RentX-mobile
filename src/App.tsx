import React, {useEffect} from 'react';
import Routes from './routes';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Routes />;
};
export default App;
