import Animated from 'react-native-reanimated';

import DynamicPressable from './DynamicPressable';

const DynamicAnimatedPressable =
  Animated.createAnimatedComponent(DynamicPressable);

export default DynamicAnimatedPressable;
