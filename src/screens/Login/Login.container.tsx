import {useState} from 'react';
import LoginUI from './Login.ui';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginContainer({navigation}: any): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = async () => {
    const body = JSON.stringify({username: username, password: password});
    const response = await fetch('/api/login', {
      method: 'POST',
      body: body,
    });

    if (response.ok) {
      navigation.navigate('Feed');
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
    }
  };

  return (
    <LoginUI
      username={username}
      password={password}
      setUserName={setUsername}
      setPassword={setPassword}
      login={login}
    />
  );
}
