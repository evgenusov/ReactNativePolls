import React from 'react';
import { IUser } from '../entities/user';
import { RoundedImage } from './RoundedImage';

type UserAvatarProps = {
  user: IUser;
  size: number;
  radius?: number;
};

/**
 * Wrapper for RoundedImage for render users avatars
 */
export const UserAvatar = ({ user, size, radius = 15 }: UserAvatarProps) => {
  return <RoundedImage src={user.avatar} size={size} radius={radius} />;
};
