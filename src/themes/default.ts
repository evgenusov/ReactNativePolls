import { DarkTheme as DefaultNavigationTheme } from '@react-navigation/native';
import { DarkTheme as DefaultPaperTheme } from 'react-native-paper';
import { COLORS } from '../constants/colors';

export const AppTheme = {
  ...DefaultNavigationTheme,
  ...DefaultPaperTheme,
  dark: true,
  colors: {
    ...DefaultNavigationTheme.colors,
    ...DefaultPaperTheme.colors,
    background: COLORS.primary_dark,
  },
};

export type Theme = typeof AppTheme;
