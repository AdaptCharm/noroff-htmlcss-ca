import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './header.module.css'

import RainyDaysLogo from '../icons/logo'
import MobileMenuButton from '../icons/menu-toggle'

const ActiveLink = ({ href, children }) => {
  const { pathname } = useRouter()

  return (
    <Link href={href}>
      <a
        className={`${styles.link} ${
          pathname.split('/')[1] === href.split('/')[1] ? styles.active : ''
        }`}
      >
        {children}
      </a>
    </Link>
  )
}

const Header = () => {
  const [mobileNavShown, setMobileNavShown] = useState(false)

  const toggle = () => setMobileNavShown(!mobileNavShown)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <nav className={styles.left}>
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/clothes">Clothes</ActiveLink>
          </nav>

          <div className={styles.center}>
            <Link href="/">
              <a className={styles.logo} aria-label="RainyDays logo">
                <RainyDaysLogo size="4" />
              </a>
            </Link>
          </div>

          <div className={styles.right}>
            <ActiveLink href="/login">Log in</ActiveLink>
            <ActiveLink href="/register">Sign up</ActiveLink>
          </div>

          <button className={`${styles.toggle} ${mobileNavShown ? 'pulseEffect' : 'pulseEffectTwo'}`} onClick={toggle} type="button" aria-label="Mobile menu">
            <MobileMenuButton />
          </button>
        </div>
      </header>

      <nav className={`${styles.mobileNav} ${mobileNavShown ? styles.active : ''}`}>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/clothes">
            <a>Clothes</a>
          </Link>
          <Link href="/login">
            <a>Log in</a>
          </Link>
          <Link href="/register">
            <a>Sign up</a>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Header