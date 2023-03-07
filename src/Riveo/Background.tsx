import React, {ReactNode} from 'react';

import {DynamicView} from 'src/components';

interface BackgroundProps {
  children: ReactNode;
}

export const Background = ({children}: BackgroundProps) => (
  <DynamicView
    backgroundColor="white"
    flex={1}
    alignItems="center"
    justifyContent="center">
    {children}
  </DynamicView>
);
