export type UserPollChoice = {
  user_uid?: string;
  choice_uid: string;
  poll_uid: string;
};

export type PollChoice = {
  title: string;
  uid: string;
};

export type Poll = {
  text: string;
  uid?: string;
  isAnon: boolean;
  choices: PollChoice[];
};
