import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from '../constants/colors';
import { MediumText } from './Typography';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactElement | string;
  mode?: 'filled' | 'link';
}

const DefaultButton = styled(TouchableOpacity)`
  height: 50px;
  background-color: ${COLORS.dark};
  justify-content: center;
  align-items: flex-start;
  border-radius: 15px;
  padding: 0 20px;
`;

const LinkButton = styled(DefaultButton)`
  background-color: transparent;
  padding: 0;
  min-height: 15px;
`;

const StyledButtonText = styled(MediumText)`
  color: ${COLORS.primary};
  font-size: 15px;
`;

const StyledButtonTextDisabled = styled(StyledButtonText)`
  color: ${COLORS.gray};
`;

export const Button = ({ mode = 'filled', ...props }: ButtonProps) => {
  const ButtonTextComponent = props.disabled
    ? StyledButtonTextDisabled
    : StyledButtonText;

  const ButtonComponent = mode === 'filled' ? DefaultButton : LinkButton;

  return (
    <ButtonComponent {...props}>
      <ButtonTextComponent selectable={false}>
        {props.children}
      </ButtonTextComponent>
    </ButtonComponent>
  );
};
