import React from "react";
import { ThemeProvider } from "degen";
import "degen/styles";
import { Button, IconLockClosed, Stack } from "degen";

import { WalletKitProvider } from "@gokiprotocol/walletkit";
import { Body } from "./Body";

export const BREAKPOINT_SIZES = [576, 780, 992, 1200] as const;

const maxMediaQueries = BREAKPOINT_SIZES.map(
  (bp) => `@media (max-width: ${bp}px)`
);

export const breakpoints = {
  mobile: maxMediaQueries[0],
  tablet: maxMediaQueries[1],
  medium: maxMediaQueries[2],
};

function App() {
  return (
    <ThemeProvider>
      <WalletKitProvider
        defaultNetwork="devnet"
        app={{
          name: "My App",
        }}
      >
        <Body />
      </WalletKitProvider>
    </ThemeProvider>
  );
}

export default App;
