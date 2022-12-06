import { memo } from 'react';
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from 'react-lazy-load-image-component';

type ImageProps = LazyLoadImageProps;

export const Image = memo(
  ({
    src,
    alt,
    width,
    height,
    effect,
    placeholder,
    placeholderSrc,
    visibleByDefault,
    ...otherProps
  }: ImageProps) => (
    <LazyLoadImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      effect={effect}
      placeholder={placeholder}
      placeholderSrc={placeholderSrc}
      visibleByDefault={visibleByDefault}
      {...otherProps}
    />
  )
);
