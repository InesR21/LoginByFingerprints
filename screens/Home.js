import React from 'react'
import {Background, Button, Title, Logo} from '../components';

export default({ navigation })  => {
  return (
    <Background>
        <Logo
          imagepPath={require('../assets/FP2.png')}
          width={180}
          height={180}
        />
      <Title>Bienvenido</Title>
      <Button
              settings={{
                icon: props => { uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400' },
              }}
        mode="contained"
        onPress={() => navigation.navigate('LoginFinger')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Register')}
      >
        Registrarse
      </Button>
    </Background>
  )
}