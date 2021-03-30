import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Button } from './Button';
import { FormElementHeader } from './FormElementHeader';
import { PollOptionsTextInput } from './PolOptions';

const ChoicesView = styled.View`
  flex-direction: column;
`;

type PollChoicesType = {
  initChoices?: string[];
  maxChoice?: number;
  onChange?: (choices: string[]) => void;
};

/**
 * Component for adding poll options
 *
 * @param initChoices – initial choices
 * @param maxChoice - max count of options
 * @returns
 */
export const PollContrstuctor = ({
  initChoices = [],
  maxChoice = 0,
  onChange,
}: PollChoicesType) => {
  const [choices, SetChoices] = useState<string[]>(initChoices);
  const [allowPush, SetAllowPush] = useState(true);

  useEffect(() => {
    onChange && onChange(choices.filter((choice) => !!choice));
    SetAllowPush(maxChoice > 0 ? choices.length < maxChoice : true);
  }, [choices, maxChoice]);

  const appendChoice = useCallback(() => {
    SetChoices([...choices, '']);
  }, [choices]);

  const onChangeItem = useCallback(
    (text, index) => {
      const newChoices = [...choices];
      newChoices[index] = text;

      SetChoices(newChoices);
    },
    [choices],
  );

  const onRemoveItem = useCallback(
    (index) => {
      const newChoices = [...choices];
      newChoices.splice(index, 1);
      SetChoices(newChoices);
    },
    [choices],
  );

  return (
    <ChoicesView>
      <FormElementHeader
        maxLength={maxChoice}
        label={'Options'}
        currentLength={choices.length}
      />
      {choices.map((choice, index) => (
        <PollOptionsTextInput
          key={index}
          value={choice}
          onRemoveTouch={() => onRemoveItem(index)}
          onChangeText={(text) => onChangeItem(text, index)}
        />
      ))}

      {allowPush && <Button onPress={appendChoice}>Add an option</Button>}
    </ChoicesView>
  );
};
