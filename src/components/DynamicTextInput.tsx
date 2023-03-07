import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import {
  createBox,
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';

import {Theme} from 'restyleTheme';
import DynamicText from './DynamicText';

const BoxTextInput = createBox<
  Theme,
  TextInputProps & React.ComponentProps<typeof DynamicText>
>(TextInput);

const DynamicTextInput = createRestyleComponent<
  VariantProps<Theme, 'textVariants'> &
    React.ComponentProps<typeof BoxTextInput>,
  Theme
>([createVariant({themeKey: 'textVariants'})], BoxTextInput);

export default DynamicTextInput;
