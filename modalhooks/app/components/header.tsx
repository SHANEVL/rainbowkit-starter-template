import React from 'react'
import styles from '@/app/styles/header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.headerContainer}> 

    <nav className={styles.nav}>
        <ul className={styles.navList}>
                <li className={styles.navItem}> 
                <Link href={'/'}><b>Modal Hooks - Nextjs 14.0.3</b></Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header