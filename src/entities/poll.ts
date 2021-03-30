export interface IUserPollChoice {
  user_uid?: string;
  choice_uid: string;
  poll_uid: string;
}

export interface IPollOption {
  title: string;
  uid: string;
}

export interface IPoll {
  text: string;
  uid?: string;
  isAnon: boolean;
  options: IPollOption[];
}

export interface IPollCreateForm {
  text: string;
  isAnon: boolean;
  multiChoice: boolean; // not sure about that name
  options: string[];
}
