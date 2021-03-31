import styled from 'styled-components/native';
import { COLORS } from '../constants/colors';
import { Theme } from '../themes/default';
import RNParsedText from 'react-native-parsed-text';

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

export const SubText = styled(Text)`
  color: ${COLORS.gray};
`;

export const ParsedText = styled(RNParsedText)`
  font-family: 'Poppins-Regular';
  color: ${({ theme }: BaseTextProps) => theme.colors.text};
`;
