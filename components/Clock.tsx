import { useEffect, useState } from "react"
import { now } from "dot-beat-time"
import styles from "@/styles/Home.module.css"
import { Roboto_Mono } from "next/font/google"

const robotoMono = Roboto_Mono({ subsets: ["latin"] })

export default function Clock() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const interval = setInterval(() => {
      const internetTime = now(true)
      setTime(internetTime)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  function copyTime() {
    navigator.clipboard.writeText(time)
  }

  return (
    <div className={styles.clock}>
      <p className={robotoMono.className} onClick={copyTime}>
        {time}
      </p>
    </div>
  )
}
