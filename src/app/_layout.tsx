import * as React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PortalProvider } from "@gorhom/portal";
import ToastManager from "toastify-react-native";

import "react-native-reanimated";

import { store } from "~/store";
import { ThemeProvider } from "~/contexts/ThemeContext";
import { EntryPoint } from "~/components/page/EntryPoint";

const RootLayout = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <ThemeProvider>
        <GestureHandlerRootView>
          <PortalProvider>
            <ToastManager />
            <EntryPoint />
          </PortalProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaProvider>
  </Provider>
);

export default RootLayout;
