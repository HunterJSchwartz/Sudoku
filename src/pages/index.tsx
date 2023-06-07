import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Board from '@/components/Board'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sudoku</title>
        <meta name="description" content="Sudoku Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className={styles.header}>Sudoku</h1>
      </header>

      <main>
        <Board/>
      </main>
    </>
  )
}
