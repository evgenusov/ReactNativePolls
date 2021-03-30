import styled from 'styled-components/native';

export const Container = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

export const Spacer = styled.View`
  flex: 1;
`;

export const SizedBox = styled.View`
  height: ${({ height = 0 }: { height?: number; width?: number }) => height}px;
  width: ${({ width = 0 }: { height?: number; width?: number }) => width}px;
`;
