import {
  createBox,
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import FastImage, {FastImageProps} from 'react-native-fast-image';

import {Theme} from 'restyleTheme';

const FastImageBox = createBox<Theme, FastImageProps>(FastImage);

const DynamicFastImage = createRestyleComponent<
  VariantProps<Theme, 'fastImageVariants'> &
    React.ComponentProps<typeof FastImageBox>,
  Theme
>([createVariant({themeKey: 'fastImageVariants'})], FastImageBox);

export default DynamicFastImage;
