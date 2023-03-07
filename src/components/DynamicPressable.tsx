import {
  createBox,
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import {Pressable, PressableProps} from 'react-native';

import {Theme} from 'restyleTheme';

const BoxPressable = createBox<Theme, PressableProps>(Pressable);

const DynamiPressable = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> &
    React.ComponentProps<typeof BoxPressable>,
  Theme
>([createVariant({themeKey: 'buttonVariants'})], BoxPressable);

export default DynamiPressable;
