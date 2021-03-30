import { IPoll } from './poll';
import { IUser } from './user';

export enum MessageTypeEnum {
  TEXT = 'text',
  POLL = 'poll',
}

export interface IMessage {
  uid: string;
  author: IUser;
  type: MessageTypeEnum;
  text?: string;
  poll?: IPoll;
}

export interface IChatMessageProps {
  message: IMessage;
}
