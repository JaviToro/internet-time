import { useEffect, useState } from "react"
import { now } from "dot-beat-time"
import styles from "@/styles/Home.module.css"

export default function Clock() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const interval = setInterval(() => {
      const internetTime = now(true)
      setTime(internetTime)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <div className={styles.clock}>{time}</div>
}
