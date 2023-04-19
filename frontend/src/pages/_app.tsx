import type { AppProps } from "next/app"
import "modern-css-reset/dist/reset.min.css"
import { Noto_Sans_JP } from "@next/font/google"

const font = Noto_Sans_JP({
  weight: "400",
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
