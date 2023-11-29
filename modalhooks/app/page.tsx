'use client'

import React from 'react';
import styles from '@/app/styles/mainGrid.module.css'; // Ensure this is the correct path to your styles

import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';

const ModalHooksHome = () => {
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();

  return (
    <main className={styles.gridContainer}>
      <div className={styles.section}>
        <h1 className={styles.titleModal}><b>Modals</b></h1>
        <div className={styles.optionModal}>
          {openConnectModal && (
            <button onClick={openConnectModal} className={styles.pItem} type="button">
              Open Connect Modal
            </button>
          )}
        </div>
        <div className={styles.optionModal}>
          {openAccountModal && (
            <button onClick={openAccountModal} className={styles.pItem} type="button">
              Open Account Modal
            </button>
          )}
        </div>
        <div className={styles.optionModal}>
          {openChainModal && (
            <button onClick={openChainModal} className={styles.pItem} type="button">
              Open Chain Modal
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default ModalHooksHome;
