import React, { useCallback, useState } from 'react';
import { FlexStyle } from 'react-native';
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
  wrapperStyle?: FlexStyle;
}

/**
 * This is wrapper for React Native TextInput all documenation and fields on url https://reactnative.dev/docs/textinput
 *
 *  @param wrapperStyle – style for input's container
 * @param label – text for label
 */
export const TextField = ({
  label,
  maxLength,
  wrapperStyle,
  onChangeText,
  ...props
}: TextFieldProps) => {
  const [currentLength, SetCurrentLength] = useState(0);

  const _onChangeText = useCallback(
    (value: string) => {
      maxLength && SetCurrentLength(value.length);
    },
    [onChangeText],
  );

  return (
    <>
      {label && (
        <FormElementHeader
          label={label}
          maxLength={maxLength}
          currentLength={currentLength}
        />
      )}
      <FieldWrapper style={wrapperStyle}>
        <TextInput
          placeholderTextColor={COLORS.gray}
          onChangeText={_onChangeText}
          underlineColorAndroid="transparent"
          textAlignVertical="center"
          {...props}
        />
      </FieldWrapper>
    </>
  );
};
