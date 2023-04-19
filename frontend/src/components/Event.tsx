import { useState, useEffect } from "react"
import style from "@/styles/event.module.css"

interface EventProps {
  date: string
  title: string
}

const Event = (props: EventProps) => {
  const { date, title } = props
  const targetTime = new Date(date)

  console.log(targetTime)
  const [timeDiff, setTimeDiff] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  // useEffectが完了するまでの待機フラグ
  const [wait, setWait] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const diffMs = targetTime.getTime() - Date.now()

      const diffDaysString = String(Math.floor(diffMs / (1000 * 60 * 60 * 24)))

      const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24)
      const diffHoursString = (diffHours < 10 ? "0" : "") + String(diffHours)

      const diffMinutes = Math.floor((diffMs / (1000 * 60)) % 60)
      const diffMinutesString =
        (diffMinutes < 10 ? "0" : "") + String(diffMinutes)

      const diffSeconds = Math.floor((diffMs / 1000) % 60)
      const diffSecondsString =
        (diffSeconds < 10 ? "0" : "") + String(diffSeconds)

      setTimeDiff({
        days: diffDaysString,
        hours: diffHoursString,
        minutes: diffMinutesString,
        seconds: diffSecondsString,
      })

      setWait(true)
    })

    return () => {
      clearInterval(intervalId)
    }
  })

  return (
    <>
      {wait && (
        <div className={style.event}>
          <h1>{title}</h1>
          <h2>
            {timeDiff.days} and {timeDiff.hours}:{timeDiff.minutes}:
            {timeDiff.seconds}
          </h2>
        </div>
      )}
    </>
  )
}

export default Event
