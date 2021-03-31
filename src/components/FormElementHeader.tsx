import React from 'react';
import styled from 'styled-components/native';
import { COLORS } from '../constants/colors';
import { SemiBoldText } from './Typography';

const FormElementLabel = styled(SemiBoldText)`
  color: ${COLORS.gray};
`;

const FormElementView = styled.View`
  height: 32px;
  justify-content: space-between;
  flex-direction: row;
`;

type FormElementHeaderProps = {
  label?: string;
  currentLength?: number;
  maxLength?: number;
};

/**
 * Component for form's field with label and max length status
 */
export const FormElementHeader = ({
  label,
  currentLength,
  maxLength,
}: FormElementHeaderProps) => {
  return (
    <FormElementView>
      {label && <FormElementLabel>{label}</FormElementLabel>}
      {maxLength && maxLength > 0 && (
        <FormElementLabel>
          {`${currentLength || 0}/${maxLength}`}
        </FormElementLabel>
      )}
    </FormElementView>
  );
};
