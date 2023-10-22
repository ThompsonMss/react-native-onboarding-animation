import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar'

import { Main } from './src/pages/Main';
import { BACKGROUND_COLOR_SYSTEM } from './src/general/constants/styles';

export default function App() {
  return (
    <>
      <StatusBar style={Platform.OS === 'ios' ? 'dark' :'light'} backgroundColor={'#000'} />
      <Main />
    </>
  );
}