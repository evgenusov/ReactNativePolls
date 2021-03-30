import styled from 'styled-components/native';
import { Theme } from '../themes/default';

type BaseTextProps = {
  theme: Theme;
};

const BaseText = styled.Text`
  color: ${({ theme }: BaseTextProps) => theme.colors.text};
`;

export const Text = styled(BaseText)`
  font-family: 'Poppins-Regular';
`;

export const BoldText = styled(BaseText)`
  font-family: 'Poppins-Bold';
`;

export const SemiBoldText = styled(BaseText)`
  font-family: 'Poppins-SemiBold';
`;

export const MediumText = styled(BaseText)`
  font-family: 'Poppins-Medium';
`;

export const SmallText = styled(Text)`
  font-size: 10px;
`;
