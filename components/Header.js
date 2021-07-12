import * as React from 'react';
import {Appbar} from 'react-native-paper';

export default ({goBack, title}) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};
