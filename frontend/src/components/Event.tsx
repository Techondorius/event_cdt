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
  const [days, setDays] = useState("00")
  const [hours, setHours] = useState("00")
  const [minutes, setMinutes] = useState("00")
  const [seconds, setSeconds] = useState("00")

  // useEffectが完了するまでの待機フラグ
  const [wait, setWait] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const diffMs = targetTime.getTime() - Date.now()

      setDays(String(Math.floor(diffMs / (1000 * 60 * 60 * 24))))

      // 日付が10未満の場合は先頭に0を追加
      if (Math.floor((diffMs / (1000 * 60 * 60)) % 24) < 10) {
        setHours("0" + String(Math.floor((diffMs / (1000 * 60 * 60)) % 24)))
      } else {
        setHours(String(Math.floor((diffMs / (1000 * 60 * 60)) % 24)))
      }

      if (Math.floor((diffMs / (1000 * 60)) % 60) < 10) {
        setMinutes("0" + String(Math.floor((diffMs / (1000 * 60)) % 60)))
      } else {
        setMinutes(String(Math.floor((diffMs / (1000 * 60)) % 60)))
      }

      if (Math.floor((diffMs / 1000) % 60) < 10) {
        setSeconds("0" + String(Math.floor((diffMs / 1000) % 60)))
      } else {
        setSeconds(String(Math.floor((diffMs / 1000) % 60)))
      }
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
            {days} and {hours}:{minutes}:{seconds}
          </h2>
        </div>
      )}
    </>
  )
}

export default Event
