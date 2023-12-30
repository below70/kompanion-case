import {Text} from 'react-native';
import styles from './Feed.styles';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function FeedUI(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Feed Screen</Text>
    </SafeAreaView>
  );
}
