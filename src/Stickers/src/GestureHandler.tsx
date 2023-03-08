import type {
  SkiaMutableValue,
  SkMatrix,
  SkRect,
} from "@shopify/react-native-skia";

interface GestureHandlerProps {
  matrix: SkiaMutableValue<SkMatrix>;
  dimensions: SkRect;
  debug?: boolean;
}

export const GestureHandler = ({
  matrix: skMatrix,
  dimensions,
  debug,
}: GestureHandlerProps) => {
  return null;
};
