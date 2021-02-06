import Head from 'next/head'
import QueryComponent from '../Components/queryBooks'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Apollo GraphQL App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h1 className={styles.title}>
          NextJS Apollo GraphQL App
        </h1>

        <h2>Table queried from the Graphql API <a href="./api/graphql" target="_blank">(GraphQL PlayGround)</a></h2>
        {/** This component renders data queried from the API */}

        <QueryComponent/>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
