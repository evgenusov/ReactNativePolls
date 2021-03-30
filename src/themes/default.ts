import { DarkTheme as DefaultNavigationTheme } from '@react-navigation/native';
import { COLORS } from '../constants/colors';

export const AppTheme = {
  ...DefaultNavigationTheme,
  dark: true,
  background_gradient: ['#2467F41A', '#14131B00', '#2467F41A'],
  colors: {
    ...DefaultNavigationTheme.colors,
    background: COLORS.primary_dark,
    card: COLORS.primary_dark,
    primary: COLORS.primary,
    text: COLORS.white,
    headerBackgroundColor: COLORS.dark,
  },
};

export type Theme = typeof AppTheme;
