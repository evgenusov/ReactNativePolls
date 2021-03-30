import { useTheme } from '@react-navigation/native';
import React, { RefAttributes, useCallback, useState } from 'react';
import { FlexStyle, StyleProp, View, ViewProps } from 'react-native';
import { TextInputProps, TextInput as RNTextInput } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from '../constants/colors';
import { Theme } from '../themes/default';
import { FormElementHeader } from './FormElementHeader';

const FieldWrapper = styled.View`
  justify-content: center;
  background-color: ${COLORS.dark};
  min-height: 35px;
  padding: 0 20px;
  border-radius: 12px;
  font-size: 15px;
`;

const TextInput = styled(RNTextInput)`
  font-family: 'Poppins-Regular';
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
`;

interface TextFieldProps extends TextInputProps {
  label?: string;
  maxLength?: number;
  multiline?: boolean;
  wrapperStyle?: FlexStyle;
}

export const TextField = (props: TextFieldProps) => {
  const [currentLength, SetCurrentLength] = useState(0);

  const onChangeText = useCallback(
    (value: string) => {
      props.maxLength && SetCurrentLength(value.length);
    },
    [props.onChangeText],
  );

  return (
    <>
      {props.label && (
        <FormElementHeader
          label={props.label}
          maxLength={props.maxLength}
          currentLength={currentLength}
        />
      )}
      <FieldWrapper style={props.wrapperStyle}>
        <TextInput
          placeholderTextColor={COLORS.gray}
          onChangeText={onChangeText}
          underlineColorAndroid="transparent"
          textAlignVertical="center"
          {...props}
        />
      </FieldWrapper>
    </>
  );
};
