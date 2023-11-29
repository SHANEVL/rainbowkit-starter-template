// SOURCE CODE: https://codesandbox.io/p/devbox/with-next-app-foktft
// Medium article: https://medium.com/@prestonetorres/web3-and-me-i-mean-next-jss-app-router-d61fc1e627f5

'use client';

import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  DisclaimerComponent,
  Chain
} from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  goerli,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

// add custom chain : avalanche
const avalanche: Chain = {
  id: 43_114,
  name: 'Avalanche',
  network: 'avalanche',
  iconUrl: 'https://example.com/icon.svg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Avalanche',
    symbol: 'AVAX',
  },
  rpcUrls: {
    public: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
    default: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
  },
  blockExplorers: {
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
    etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934,
    },
  },
  testnet: false,
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    avalanche,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

// Get project id here: https://walletconnect.com/
const projectId = `${process.env.WALLET_CONNECT_YOUR_PROJECT_ID}`;

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit showcase demo',
  projectId,
  chains,
});

// add disclaimer
const Disclaimer: DisclaimerComponent = ({ Text, Link }) => (
  <Text>
    By connecting your wallet, you agree to the{' '}
    <Link href="https://termsofservice.xyz">Terms of Service</Link> and
    acknowledge you have read and understand the protocol{' '}
    <Link href="https://disclaimer.xyz">Disclaimer</Link>
  </Text>
);

const showcaseAppInfo = {
  appName: 'Rainbowkit showcase demo',
  disclaimer: Disclaimer
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={showcaseAppInfo}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
