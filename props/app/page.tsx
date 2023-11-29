'use client'

import styles from '@/app/styles/mainGrid.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const PropsHome = () => {
  return (
    <main className={styles.gridContainer}>
      <section className={styles.section}>
        <h1 className={styles.title}><b>Sign in</b></h1>
        <ConnectButton label="Sign in" />
      </section>
      <section className={styles.section}>
        <h1 className={styles.title}><b>Account Status</b></h1>
        <div className={styles.option}>
          <p className={styles.pItem}>Only show avatar</p>
          <ConnectButton accountStatus="avatar" />
        </div>
        <div className={styles.option}>
          <p className={styles.pItem}>Only show address</p>
          <ConnectButton accountStatus="address" />
        </div>
      </section>
      <section className={styles.section}>
        <h1 className={styles.title}><b>Chain Status</b></h1>
        <div className={styles.option}>
          <p className={styles.pItem}>Only show the current chain icon</p>
          <ConnectButton chainStatus="icon" />
        </div>
        <div className={styles.option}>
          <p className={styles.pItem}>Only show the current chain name</p>
          <ConnectButton chainStatus="name" />
        </div>
        <div className={styles.option}>
          <p className={styles.pItem}>Hide the chain UI entirely</p>
          <ConnectButton chainStatus="none" />
        </div>
      </section>
      <section className={styles.section}>
        <h1 className={styles.title}><b>Show Balance</b></h1>
        <div className={styles.option}>
          <p className={styles.pItem}>Hide the balance</p>
          <ConnectButton showBalance={false} />
        </div>
      </section>
    </main>
  )
}

export default PropsHome;
