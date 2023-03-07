import type { SkFont } from "@shopify/react-native-skia";
import {
  Image,
  RoundedRect,
  Easing,
  runTiming,
  useComputedValue,
  useValue,
  useTouchHandler,
  Canvas,
  ImageShader,
  Rect,
  rect,
  Group,
  Paint,
  RuntimeShader,
  Skia,
  Text,
  useImage,
} from "@shopify/react-native-skia";
import { Dimensions, PixelRatio } from "react-native";

import { Trash } from "./Icons";
import { Labels } from "./Labels";
import { pageCurl } from "./pageCurl";

const { width: wWidth } = Dimensions.get("window");
const pd = PixelRatio.get();
const height = 150;
const outer = Skia.XYWHRect(0, 0, wWidth, height);
const pad = 16;
const cornerRadius = 16;

const inner = Skia.RRectXY(
  Skia.XYWHRect(pad, pad, wWidth - pad * 2, height - pad * 2),
  cornerRadius,
  cornerRadius
);
const labelHeight = 25;

export interface Project {
  id: string;
  title: string;
  size: string;
  duration: string;
  picture: number;
  color: string;
}

interface ProjectProps {
  project: Project;
  font: SkFont;
  smallFont: SkFont;
}

export const Project = ({
  font,
  smallFont,
  project: { picture, title, color, size, duration },
}: ProjectProps) => {
  const image = useImage(picture);
  if (!image) {
    return null;
  }
  return (
    <Canvas
      style={{
        width: outer.width,
        height: outer.height,
      }}
    >
      <RoundedRect rect={inner} color="red" />
      <Group
        transform={[
          { translateX: 310 },
          { translateY: (150 - 24 * 1.5) / 2 },
          { scale: 1.5 },
        ]}
      >
        <Trash />
      </Group>
      <Group>
        <Group clip={inner}>
          <Image image={image} rect={inner.rect} fit="cover" />
          <Rect
            rect={rect(
              inner.rect.x,
              inner.rect.y + inner.rect.height - labelHeight,
              inner.rect.width,
              labelHeight
            )}
            color={color}
          />
          <Labels size={size} font={smallFont} duration={duration} />
          <Text x={32} y={height - 50} text={title} color="white" font={font} />
        </Group>
      </Group>
    </Canvas>
  );
};
