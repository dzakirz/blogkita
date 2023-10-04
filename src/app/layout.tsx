import { inter } from "@/lib/fonts"
import { Metadata } from "next"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Blogkita"
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
