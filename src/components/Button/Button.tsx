import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.styles';

interface Props {
  title: string;
  onPress: () => void;
}

export default function Button(props: Props): JSX.Element {
  const {title, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
