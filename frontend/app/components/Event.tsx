"use client"

import { useEffect, useState } from "react"
import axios, { AxiosResponse } from "axios"
import Timer from "@/components/Timer"

type resType = {
  id: number
  name: string
  date: string
  deleted: string | null
}

const Event = () => {
  const defaultRes: resType = {
    id: 0,
    name: "",
    date: "",
    deleted: null,
  }

  const [data, setData] = useState<resType>(defaultRes)

  useEffect(() => {
    const apiRequest = async () => {
      await axios
        .get("http://localhost:8000/mock")
        .then((res: AxiosResponse<resType>) => {
          setData(res.data)
        })
    }
    apiRequest()
  }, [])

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl">{data.name}</h1>
        <Timer date={data.date} />
      </div>
    </>
  )
}

export default Event
