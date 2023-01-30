import "./globals.css"
import { Montserrat } from "@next/font/google"

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${montserrat.className} m-32`}>{children}</body>
    </html>
  )
}
