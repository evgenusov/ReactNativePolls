import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch } from 'react-redux';
import { BackgroundGradient } from '../components/BackgroundGradient';
import { Button } from '../components/Button';
import { Header } from '../components/CustomHeader';
import { Container, SizedBox } from '../components/Helpers';
import { PollContrstuctor } from '../components/PollConstructor';
import { Switch } from '../components/Switch';
import { TextField } from '../components/TextField';
import { ROUTES } from '../constants/routes';
import { IPollCreateForm } from '../entities/poll';
import { messagesActions } from '../store/chat/reducer';

export const CreatePollScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isValidForm, SetIsValidForm] = useState(false);

  const [poll, SetPoll] = useState<IPollCreateForm>({
    text: '',
    isAnon: true,
    options: [],
    multiChoice: false,
  });

  const onCreate = useCallback(() => {
    dispatch(messagesActions.sendPoll(poll));
    navigation.navigate(ROUTES.CHAT);
  }, [poll]);

  useEffect(() => {
    SetIsValidForm(poll.text.length > 0 && poll.options.length > 0);
  }, [poll]);

  const onChangePollText = (text: string) => {
    SetPoll({
      ...poll,
      text,
    });
  };

  const onChangeOptions = (options: string[]) => {
    SetPoll({
      ...poll,
      options,
    });
  };

  const onChangeAnon = (value: boolean) => {
    SetPoll({
      ...poll,
      isAnon: value,
    });
  };

  const onChangeMultiOptions = (value: boolean) => {
    SetPoll({
      ...poll,
      multiChoice: value,
    });
  };

  return (
    <BackgroundGradient>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView bounces={false}>
          <Header
            title={'New Poll'}
            hasBack={true}
            withSafeArea={false}
            backgroundColor="transparent"
            right={
              <Button mode="link" onPress={onCreate} disabled={!isValidForm}>
                Create
              </Button>
            }
          />
          <Container>
            <TextField
              label="Question"
              maxLength={140}
              value={poll.text}
              wrapperStyle={{
                minHeight: 50,
              }}
              placeholder={'Ask a question'}
              multiline={true}
              onChangeText={onChangePollText}
            />
            <SizedBox height={32} />
            <PollContrstuctor maxChoice={8} onChange={onChangeOptions} />
            <SizedBox height={32} />
            <Switch
              text="Anonymous voting"
              onChange={onChangeAnon}
              icon={
                <Text>
                  <Icon name="user-secret" size={20} />
                </Text>
              }
            />
            <Switch
              icon={
                <Text>
                  <Icon name="stream" size={20} />
                </Text>
              }
              text="Ability to add more options"
              onChange={onChangeMultiOptions}
            />
            <SizedBox height={50} />
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </BackgroundGradient>
  );
};
