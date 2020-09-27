import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | RainyDays</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello <a href="/">World!</a>
        </h1>

        <p className={styles.description}>
          This is the website of RainyDays.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
        >
          <img src="/logo.png" alt="RainyDays Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
