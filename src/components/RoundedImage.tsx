import React from 'react';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

type RoundedImageProps = {
  src: string;
  size: number;
  radius?: number;
};

const RoundedImageView = styled.View`
  overflow: hidden;
`;
export const RoundedImage = ({ size, radius, src }: RoundedImageProps) => {
  return (
    <RoundedImageView
      style={{
        width: size,
        height: size,
        borderRadius: radius || size,
      }}>
      <FastImage
        style={{ width: size, height: size }}
        source={{
          uri: src,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </RoundedImageView>
  );
};
