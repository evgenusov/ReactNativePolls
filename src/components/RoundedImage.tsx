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

/**
 * Component for render rounded images
 *
 * @param size - size of image for width and height
 * @param radius - size of radius for rounding of images
 * @param src – url for image
 * @returns
 */
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
