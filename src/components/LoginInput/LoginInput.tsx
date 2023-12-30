import {TextInput, View} from 'react-native';
import styles from './LoginInput.styles';

interface Props {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
}

export default function LoginInput(props: Props): JSX.Element {
  const {placeholder, value, onChange} = props;
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        style={styles.textInput}
      />
    </View>
  );
}
