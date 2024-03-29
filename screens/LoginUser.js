import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {Background, Button, Title, Logo, Input, Header} from '../components';
import {emailValidator, passwordValidator} from '../helpers/validators';
import {theme} from '../core/theme';

export default ({navigation}) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const Login = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{name: 'Profile'}],
    });
  };

  return (
    <>
      <Header goBack={navigation.goBack} title={'User/Contraseña'} />
      <Background>
        <Logo
          imagepPath={require('../assets/FP2.png')}
          width={180}
          height={180}
        />
        <Title>Bienvenido De Nuevo.</Title>
        <Input
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({value: text, error: ''})}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <Input
          label="Contraseña"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({value: text, error: ''})}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <Button mode="contained" onPress={Login}>
          Login
        </Button>
        <View style={styles.row}>
          <Text>¿No tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.replace('Register')}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
