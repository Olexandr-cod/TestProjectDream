import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  TextInput,
} from 'react-native';
import ButtonDefault from '../../components/UI/ButtonDefault/ButtonDefault';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const users = [
  {
    username: 'admin1',
    password: '12345678',
  },
  {
    username: 'admin2',
    password: '012345678',
  },
];

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorPass, setErrorPass] = useState<boolean>(false);

  useEffect(() => {
    if (email) {
      setErrorEmail(false);
    }
    if (password) {
      setErrorPass(false);
    }
  }, [email, password]);

  const handleSubmit = () => {
    const usercheck = users.find(
      user => user.username === email && user.password === password,
    );
    if (usercheck) {
      navigation.navigate('Home');
    }

    if (email === '') {
      setErrorEmail(true);
    }
    if (password === '') {
      setErrorPass(true);
    }
    console.log('RES===', usercheck);
    // setEmail('');
    // setPassword('');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View>
        <TextInput
          placeholder="Email"
          style={errorEmail ? styles.textInputFailStyle : styles.textInputStyle}
          onChangeText={val => setEmail(val)}
        />
        {errorEmail && <Text style={styles.textErr}>Enter your email</Text>}
      </View>
      <View>
        <TextInput
          placeholder="Password"
          style={
            errorPass
              ? [styles.textInputFailStyle, styles.marginStyle]
              : [styles.textInputStyle, styles.marginStyle]
          }
          onChangeText={val => setPassword(val)}
        />
        {errorPass && <Text style={styles.textErr}>Enter your password</Text>}
      </View>

      <ButtonDefault title="Login" onPress={handleSubmit} />
      {errorEmail && errorPass && (
        <View style={styles.containerCenter}>
          <Text style={styles.textErr}>Check your login and password</Text>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
