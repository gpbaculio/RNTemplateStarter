/* eslint-disable @typescript-eslint/no-var-requires */
import {
  Canvas,
  Skia,
  useFont,
  useImage,
  useValue,
} from "@shopify/react-native-skia";
import React from "react";
import { Dimensions, View } from "react-native";

import { HelloSticker, HelloStickerDimensions } from "./HelloSticker";
import { LocationSticker, LocationStickerDimensions } from "./LocationSticker";
import { GestureHandler } from "./GestureHandler";
import { Picture, PictureDimensions } from "./Picture";

const { width, height } = Dimensions.get("window");

const zurich = require("./assets/zurich.jpg");
const aveny = require("./assets/aveny.ttf");

export const Stickers = () => {
  const image = useImage(zurich);
  const font = useFont(aveny, 56);
  if (!image || !font) {
    return null;
  }
  return (
    <View>
      <Canvas style={{ width, height }}>
        <Picture image={image} />
      </Canvas>
    </View>
  );
};
