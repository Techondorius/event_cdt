import { useState, useEffect } from "react"
import style from "@/styles/event.module.css"
import axios, { AxiosResponse } from "axios"

const Event = () => {
  const [timeDiff, setTimeDiff] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  interface res {
    id: number
    title: string
    date: string
  }

  const defaultRes: res = {
    id: 0,
    title: "",
    date: "",
  }

  const [data, setData] = useState<res>(defaultRes)

  // useEffectが完了するまでの待機フラグ
  const [wait, setWait] = useState(false)

  useEffect(() => {
    const apiRequest = async () => {
      await axios
        .get("http://localhost:8000/mock")
        .then((res: AxiosResponse<res>) => {
          setData(res.data)
        })
    }
    apiRequest()
  }, [])
  const targetTime = new Date(data.date)

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
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  })

  return (
    <>
      {wait && (
        <div className={style.event}>
          <h1>{data.title}</h1>
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
