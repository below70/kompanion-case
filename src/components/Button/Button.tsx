import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.styles';

interface Props {
  title: string;
  onPress: () => void;
  testID?: string;
}

export default function Button(props: Props): JSX.Element {
  const {title, onPress, testID} = props;
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
