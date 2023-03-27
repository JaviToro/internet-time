import Head from "next/head"
import styles from "@/styles/Home.module.css"
import Clock from "@/components/Clock"

export default function Home() {
  return (
    <>
      <Head>
        <title>Internet Clock</title>
        <meta
          name="description"
          content="An online watch that displays the time in internet format, a decimal concept introduced by Swatch in 1998 in order to adapt to the internet era and unify all time zones."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Clock />
      </main>
    </>
  )
}
