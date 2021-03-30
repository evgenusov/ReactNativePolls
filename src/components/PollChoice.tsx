import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';
import { COLORS } from '../constants/colors';
import { Theme } from '../themes/default';

const Field = styled.View`
  height: 51px;
  flex-direction: row;
  margin-bottom: 9px;
  border-radius: 15px;
  overflow: hidden;
`;

const TextInput = styled.TextInput`
  height: 51px;
  flex: 1;
  background-color: ${COLORS.dark};
  font-family: 'Poppins-Regular';
  font-size: 15px;
  padding: 0 20px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
`;

const FieldRemoveButton = styled.TouchableOpacity`
  height: 51px;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${COLORS.primary_opacity10};
`;

interface PollOptionsFieldsProps {
  onChangeText: (text: string) => void;
  onRemoveTouch: () => void;
  value?: string;
}

export const PollOptionsTextInput = ({
  onChangeText,
  onRemoveTouch,
  value,
}: PollOptionsFieldsProps) => {
  return (
    <Field>
      <TextInput onChangeText={onChangeText} value={value} autoFocus={true} />
      <FieldRemoveButton onPress={onRemoveTouch}>
        <Icon name="times" color={COLORS.white} size={18} />
      </FieldRemoveButton>
    </Field>
  );
};
