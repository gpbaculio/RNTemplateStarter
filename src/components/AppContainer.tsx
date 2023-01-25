import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import restyleTheme from 'restyleTheme';
import {ThemeProvider} from '@shopify/restyle';

type AppContainerProps = {children: React.ReactNode};

const AppContainer = ({children}: AppContainerProps) => (
  <GestureHandlerRootView>
    <ThemeProvider theme={restyleTheme}>{children}</ThemeProvider>
  </GestureHandlerRootView>
);

export default AppContainer;
