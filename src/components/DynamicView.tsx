import {
  createBox,
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import {Theme} from 'restyleTheme';

const BoxView = createBox<Theme>();

const DynamicView = createRestyleComponent<
  VariantProps<Theme, 'containerVariants'> &
    React.ComponentProps<typeof BoxView>,
  Theme
>([createVariant({themeKey: 'containerVariants'})], BoxView);

export default DynamicView;
