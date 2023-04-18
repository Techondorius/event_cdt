import { useState, useEffect } from "react"

interface EventProps {
  date: string
  title: string
}

const Event: React.FC<EventProps> = ({ title }) => {
  const targetTime = new Date(2024, 9, 9, 9, 9, 9, 9)

  const [days, setDays] = useState("00")
  const [hours, setHours] = useState("00")
  const [minutes, setMinutes] = useState("00")
  const [seconds, setSeconds] = useState("00")
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
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  })

  return (
    <div>
      <h1>{title}</h1>
      {wait && (
        <h2>
          {days} and {hours}:{minutes}:{seconds}
        </h2>
      )}
    </div>
  )
}

export default Event
