"use client"

import React from "react"
import dynamic from "next/dynamic"

const DesktopLayout = dynamic(() => import("./DesktopLayout"), { ssr: false })
const MobileLayout = dynamic(() => import("./MobileLayout"), { ssr: false })

export default function Layout({
  children,
  lang,
}: {
  children: React.ReactNode
  lang: string
}) {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (typeof window === "undefined") {
    return null // or a loading placeholder
  }

  return isMobile ? (
    <MobileLayout lang={lang}>{children}</MobileLayout>
  ) : (
    <DesktopLayout lang={lang}>{children}</DesktopLayout>
  )
}

