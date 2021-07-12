import * as React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { theme } from '../core/theme';
export default () => (
  <ActivityIndicator animating={true} color={theme.colors.primary} size={'large'}  />
);
