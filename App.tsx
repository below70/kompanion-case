import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigators/AppNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
