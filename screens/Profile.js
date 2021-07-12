import React from 'react';
import {Background, Button, Paragraph, Title, Logo} from '../components';
import {
  Dimensions,
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {theme} from '../core/theme';
import {Appbar} from 'react-native-paper';

export default ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/user.jpg')}
      resizeMode="cover"
      style={styles.background}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={navigation.goBack} />
      </Appbar.Header>
      <View style={styles.userDatos}>
        <Text style={styles.UserName}>Ines Rojas</Text>
        <Text style={styles.UserDesc}>Developer</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.eye}>
          <PaperButton
            icon="eye"
            mode="text"
            onPress={() => console.log('Pressed')}
          />
        </View>
        <View style={styles.userSocial}>
          <View>
            <Text style={styles.UserFolowersTitle}>Folowers</Text>
            <Text style={styles.UserFolowersDesc}>19566</Text>
          </View>
          <View>
            <Text style={styles.UserFolowingTitle}>Folowing</Text>
            <Text style={styles.UserFolowingDesc}>195666</Text>
          </View>
        </View>
        <View>
          <Button
            mode="outlined"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'Home'}],
              })
            }>
            Sigueme
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: '100%',
  },
  header: {
    backgroundColor: 'transparent',
  },
  container: {
    flex: 0.5,
    width: width,
    height: '25%',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'baseline',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  userDatos: {
    marginTop: 10,
    justifyContent: 'flex-end',
    alignSelf: 'flex-start',
  },
  UserName: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    marginStart: 12,
  },
  UserDesc: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },

  UserFolowersTitle: {
    fontSize: 12,
    color: theme.colors.secondary,
    marginStart: 12,
  },
  UserFolowersDesc: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
  },

  UserFolowingTitle: {
    fontSize: 12,
    color: theme.colors.secondary,
    marginStart: 12,
  },
  UserFolowingDesc: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
  },
  userSocial: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  eye: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
});
