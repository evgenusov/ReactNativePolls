import React, { useCallback, useState } from 'react';
import { Switch as RNPSwitch } from 'react-native-paper';
import styled from 'styled-components/native';
import { COLORS } from '../constants/colors';
import { MediumText } from './Typography';

const SwitchView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SwitchViewIcon = styled.View`
  height: 56px;
  width: 36px;
  justify-content: center;
  align-items: flex-start;
`;

const SwitchViewText = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;

type SwithProps = {
  text: string;
  icon?: React.ReactElement;
  onChange: (value: boolean) => void;
  value?: boolean;
};

export const Switch = ({ icon, text, onChange, value }: SwithProps) => {
  const [statedValue, SetStatedVavlue] = useState(value);

  const onChangeValue = useCallback(
    (newValue: boolean) => {
      SetStatedVavlue(newValue);
      onChange(newValue);
    },
    [onChange, statedValue],
  );

  return (
    <SwitchView>
      {icon && <SwitchViewIcon>{icon}</SwitchViewIcon>}
      <SwitchViewText>
        <MediumText>{text}</MediumText>
      </SwitchViewText>
      <RNPSwitch
        onValueChange={onChangeValue}
        value={statedValue}
        trackColor={{
          true: COLORS.primary,
          false: COLORS.gray,
        }}
      />
    </SwitchView>
  );
};
