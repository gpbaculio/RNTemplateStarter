import {
  runTiming,
  SkFont,
  useComputedValue,
  useTouchHandler,
} from '@shopify/react-native-skia';
import {
  Image,
  RoundedRect,
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
  useValue,
} from '@shopify/react-native-skia';
import {Dimensions, PixelRatio} from 'react-native';

import {Trash} from './Icons';
import {Labels} from './Labels';
import {pageCurl} from './pageCurl';

const {width: wWidth} = Dimensions.get('window');
const pd = PixelRatio.get();
const height = 150;
const outer = Skia.XYWHRect(0, 0, wWidth, height);
const pad = 16;
const cornerRadius = 16;

const inner = Skia.RRectXY(
  Skia.XYWHRect(pad, pad, wWidth - pad * 2, height - pad * 2),
  cornerRadius,
  cornerRadius,
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

const opt = {
  duration: 450,
};

export const Project = ({
  font,
  smallFont,
  project: {picture, title, color, size, duration},
}: ProjectProps) => {
  const image = useImage(picture);
  const origin = useValue(outer.width);
  const pointer = useValue(outer.width);

  const onTouch = useTouchHandler({
    onStart: ({x}) => {
      origin.current = x;
    },
    onActive: ({x}) => {
      pointer.current = x;
    },
    onEnd: () => {
      runTiming(origin, outer.width, opt);
      runTiming(pointer, outer.width, opt);
    },
  });

  const uniforms = useComputedValue(() => {
    return {
      resolution: [outer.width, outer.height].map(v => v * pd),
      origin: origin.current * pd,
      pointer: pointer.current * pd,
      container: [
        inner.rect.x,
        inner.rect.y,
        inner.rect.x + inner.rect.width,
        inner.rect.y + inner.rect.height,
      ].map(v => v * pd),
      cornerRadius: cornerRadius * pd,
    };
  }, [origin, pointer]);

  if (!image) {
    return null;
  }

  return (
    <Canvas
      onTouch={onTouch}
      style={{
        width: outer.width,
        height: outer.height,
      }}>
      <RoundedRect rect={inner} color="red" />
      <Group
        transform={[
          {translateX: 310},
          {translateY: (150 - 24 * 1.5) / 2},
          {scale: 1.5},
        ]}>
        <Trash />
      </Group>
      <Group transform={[{scale: 1 / pd}]}>
        <Group
          clip={inner}
          transform={[{scale: pd}]}
          layer={
            <Paint>
              <RuntimeShader source={pageCurl} uniforms={uniforms} />
            </Paint>
          }>
          <Image image={image} rect={inner.rect} fit="cover" />
          <Rect
            rect={rect(
              inner.rect.x,
              inner.rect.y + inner.rect.height - labelHeight,
              inner.rect.width,
              labelHeight,
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
