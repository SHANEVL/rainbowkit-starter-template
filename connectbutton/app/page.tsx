'use client'

import styles from '@/app/styles/home.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount();
  
  return (
    <main className={styles.mainContainer}>
      <section className={styles.walletSection}>
        <div className={styles.walletComponent}>
          <h1><b>ConnectWallet component (Rainbowkit): </b></h1>
          <div className={styles.centered}>
            <ConnectButton />
          </div>
        </div>
        <div className={styles.connectionDetails}>
          <h1><b>useAccount information (WAGMI): </b></h1>
          <div className={styles.centered}>
            <div>Address? {address || 'Undefined'}</div>
            <div>isConnecting? {isConnecting.toString()}</div>
            <div>isDisconnected? {isDisconnected.toString()}</div>
          </div>
        </div>
      </section>
    </main>
  );
}

