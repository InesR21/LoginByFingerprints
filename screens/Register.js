import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {Background, Button, Title, Logo, Input, Header} from '../components';
import {theme} from '../core/theme';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../helpers/validators';
import {firebaseAuth} from '../enviroment/config.js';

export default function RegisterScreen({navigation}) {
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const SignUp = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setName({...name, error: nameError});
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    console.log('registrado', name.value, email.value, password.value);
    handleSignUp(name.value, email.value, password.value);
  };

  const handleSignUp = (name, email, password) => {
    firebaseAuth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('user created', user);
 /*        firebaseAuth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            console.log('user logged in', user);
            navigation.reset({
              index: 0,
              routes: [{name: 'Profile'}],
            });
          }); */
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  return (
    <>
      <Header goBack={navigation.goBack} title={'registro'} />
      <Background>
        <Logo
          imagepPath={require('../assets/FP2.png')}
          width={180}
          height={180}
        />
        <Title>Registrate</Title>
        <Input
          label="Nombre"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({value: text, error: ''})}
          error={!!name.error}
          errorText={name.error}
        />
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
        <Button mode="contained" onPress={SignUp} style={{marginTop: 24}}>
          Registrarse
        </Button>
        <View style={styles.row}>
          <Text>¿Ya tienes Una Cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.replace('LoginFinger')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
