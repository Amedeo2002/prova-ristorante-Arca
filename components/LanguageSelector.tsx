"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const languages = [
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
]

export default function LanguageSelector({ currentLang }: { currentLang: string }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (langCode: string) => {
    const newPath = window.location.pathname.replace(/^\/[^/]+/, `/${langCode}`)
    setIsOpen(false)
    router.push(newPath)
  }

  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`flex items-center space-x-1 px-2 py-1 rounded ${
              currentLang === lang.code ? "bg-white text-[#594a47]" : "bg-transparent text-white hover:bg-white/20"
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.code.toUpperCase()}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

