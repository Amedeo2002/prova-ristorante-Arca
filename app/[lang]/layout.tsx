import type React from "react"

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return children
}

export async function generateStaticParams() {
  return [{ lang: "it" }, { lang: "en" }, { lang: "de" }]
}

