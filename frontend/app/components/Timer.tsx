"use client"

import { useEffect, useState } from "react"

type props = {
  date: string
}

const Timer = (props: props) => {
  const [timeDiff, setTimeDiff] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  // console.log(props.date)

  const targetTime = new Date(props.date)
  // console.log(targetTime)

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
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  })
  return (
    <h2 className="text-4xl">
      {timeDiff.days} and {timeDiff.hours}:{timeDiff.minutes}:{timeDiff.seconds}
    </h2>
  )
}

export default Timer
