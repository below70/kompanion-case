import {Text} from 'react-native';
import styles from './Login.styles';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function LoginUI(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login Screen</Text>
    </SafeAreaView>
  );
}
