import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import { COLORS } from '../constants/colors';
import { Theme } from '../themes/default';
import { SemiBoldText, Text } from './Typography';

const HeaderView = styled.View`
  flex-direction: row;
  padding: 0 20px;
  justify-content: center;
  min-height: 56px;
  align-items: center;
  padding-bottom: 3px;
  padding-top: 3px;
`;

const HeaderLeft = styled.View`
  width: 56px;
`;

const HeaderRight = styled.View`
  min-width: 56px;
  justify-content: flex-end;
  align-items: flex-end;
`;

const HeaderTitleView = styled.View`
  flex: 1;
`;

const HeaderTitle = styled(SemiBoldText)`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const HeaderSubtitle = styled(Text)`
  font-size: 12px;
  color: ${COLORS.gray};
  text-align: center;
`;

type HeaderProps = {
  left?: React.ReactElement;
  title?: string;
  subtitle?: string;
  right?: React.ReactElement;
  hasBack?: boolean;
  onBack?: () => void;
  withSafeArea?: boolean;
  backgroundColor?: string;
};

/**
 * Custom header component with better customization than standart
 * @returns
 */
export const Header = (props: HeaderProps) => {
  const theme = useTheme() as Theme;
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const canBoBack = navigation.canGoBack();

  const { hasBack = true, onBack = () => navigation.goBack() } = props;

  const {
    left = hasBack && canBoBack && (
      <Icon
        name={'close'}
        size={20}
        color={theme.colors.text}
        onPress={onBack}
      />
    ),
    title,
    right,
    withSafeArea = true,
    subtitle,
    backgroundColor = theme.colors.headerBackgroundColor,
  } = props;

  return (
    <>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor={backgroundColor}
      />
      <HeaderView
        style={[
          {
            paddingTop: withSafeArea ? insets.top : 0,
            backgroundColor,
          },
        ]}>
        <HeaderLeft>{left}</HeaderLeft>
        <HeaderTitleView>
          <HeaderTitle>{title}</HeaderTitle>
          {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>}
        </HeaderTitleView>
        <HeaderRight>{right}</HeaderRight>
      </HeaderView>
    </>
  );
};
