import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './Login.styles';
import {Button, LoginInput} from '../../components';

interface Props {
  username: string;
  password: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  login: () => void;
}

export default function LoginUI(props: Props): JSX.Element {
  const {username, password, setUserName, setPassword, login} = props;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Login</Text>
          <View style={styles.inputContainer}>
            <LoginInput
              placeholder="Username"
              value={username}
              onChange={text => setUserName(text)}
            />
            <LoginInput
              placeholder="Password"
              value={password}
              onChange={text => setPassword(text)}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button testID="login-button" title="Submit" onPress={login} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
