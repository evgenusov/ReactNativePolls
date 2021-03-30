import { useTheme } from '@react-navigation/native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { Theme } from '../themes/default';

type BackgroundGradientProps = {
  children: React.ReactElement;
};

const StyledGradient = styled(LinearGradient)`
  flex: 1;
`;
export const BackgroundGradient = (props: BackgroundGradientProps) => {
  const theme = useTheme() as Theme;

  return <StyledGradient colors={theme.background_gradient} {...props} />;
};
