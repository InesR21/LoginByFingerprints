import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Background,
  Button,
  Paragraph,
  Title,
  Logo,
  Header,
  Loading,
} from '../components';
import ReactNativeBiometrics from 'react-native-biometrics';
import * as Keychain from 'react-native-keychain';
const user = {
  username: 'ines0263',
  password: 'prueba01',
};
export default ({navigation}) => {
  const [available, setAvailable] = useState(false);
  const [finger, setFinger] = useState(false);
  const [loading, setLoading] = useState(false);

  isSensorAvailable = () => {
    ReactNativeBiometrics.isSensorAvailable().then((resultObject) => {
      const {available, biometryType} = resultObject;

      if (available && biometryType === ReactNativeBiometrics.TouchID) {
        console.log('IOS only TouchID is supported');
        setAvailable(true);
      } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
        console.log('IOS only FaceID is supported');
        setAvailable(true);
      } else if (
        available &&
        biometryType === ReactNativeBiometrics.Biometrics
      ) {
        console.log('Android only Biometrics is supported');
        setAvailable(true);
      } else {
        console.log('Biometrics not supported');
      }
    });
  };
  useEffect(() => {
    isSensorAvailable();
  }, []);

  habilitarHuella = async () => {
    setLoading(true);
    console.log('Habilitando huella', loading);
    await Keychain.setGenericPassword(user.username, user.password);
    ReactNativeBiometrics.createKeys('Confirm fingerprint').then(
      (resultObject) => {
        const {publicKey} = resultObject;
        setLoading(false);
        console.log(publicKey);
        setFinger(true);
      },
    );
  };

  validateFingerPrint = () => {
    console.log('Validando huella');
    let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
    let payload = epochTimeSeconds + 'some message';

    ReactNativeBiometrics.createSignature({
      promptMessage: 'Iniciar Sesión',
      payload: payload,
    }).then((resultObject) => {
      const {success, signature} = resultObject;

      if (success) {
        console.log(signature);
        Keychain.getGenericPassword().then((credentials) => {
          if (credentials) {
            navigation.navigate('Profile');
          } else {
            alert('Intentalo de vuelta');
          }
        });
      }
    });
  };
  let buttonfinger;
  if (loading) {
    buttonfinger = <Loading />;
  } else {
    if (finger) {
      buttonfinger = (
        <Button
          mode={'contained'}
          onPress={() => (finger ? validateFingerPrint() : habilitarHuella())}>
          {finger ? 'Login con Huella' : 'Habilitar Huella'}
        </Button>
      );
    } else {
      buttonfinger = (
        <>
          <Button
            mode={'contained'}
            onPress={() =>
              finger ? validateFingerPrint() : habilitarHuella()
            }>
            {finger ? 'Login con Huella' : 'Habilitar Huella'}
          </Button>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('LoginUser')}>
            User/Contraseña
          </Button>
        </>
      );
    }
  }
  return (
    <>
      <Header goBack={navigation.goBack} title={'FingerPrints'} />
      <Background>
        <View style={styles.container}>
          <Logo
            imagepPath={require('../assets/FP2.png')}
            width={180}
            height={180}
          />
          <Title>Bienvenido</Title>
          {available && (
            <Paragraph>
              Se puede loguear Facilmente con la huella dactilar
            </Paragraph>
          )}
          {available ? (
            <>{buttonfinger}</>
          ) : (
            <Paragraph>Lo sentimos no puede usar esta funcionalidad</Paragraph>
          )}
        </View>
      </Background>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
