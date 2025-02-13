"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const translations = {
  it: {
    home: "HOME",
    arca: "ARCA",
    menu: "MENÙ",
    gallery: "GALLERIA",
  },
  en: {
    home: "HOME",
    arca: "ARCA",
    menu: "MENU",
    gallery: "GALLERY",
  },
  de: {
    home: "HOME",
    arca: "ARCA",
    menu: "MENÜ",
    gallery: "GALERIE",
  },
}

export default function Navbar({ lang, isSmall = false }: { lang: string; isSmall?: boolean }) {
  const t = translations[lang as keyof typeof translations] || translations.it
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "") {
      return pathname === `/${lang}` || pathname === `/${lang}/`
    }
    return pathname.startsWith(`/${lang}/${path}`)
  }

  const textColor = isSmall ? "text-white" : "text-[#DCD7C9]"
  const dividerColor = isSmall ? "text-white" : "text-[#DCD7C9]"
  const hoverColor = "hover:text-[#DCD7C9]"
  const activeColor = "text-[#DCD7C9]"

  return (
    <nav className="w-full">
      <div className="flex justify-center items-center">
        <div className="flex items-center justify-center">
          {Object.entries(t).map(([key, value], index) => {
            const path = key === "home" ? "" : key
            const active = isActive(path)
            return (
              <div key={key} className="flex items-center">
                <div className="relative px-6">
                  <Link
                    href={`/${lang}/${path}`}
                    className={`
                      ${textColor} ${hoverColor} transition-all duration-300
                      tracking-wider text-[11px] sm:text-xs lg:text-sm uppercase
                      ${active ? `font-bold ${activeColor}` : "font-normal"}
                    `}
                  >
                    {value}
                    {active && (
                      <span
                        className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-full h-[2px] bg-white"
                        style={{ width: `${value.length * 0.6}em` }}
                      ></span>
                    )}
                  </Link>
                </div>
                {index < Object.entries(t).length - 1 && <span className={`${dividerColor} opacity-50 px-0`}>|</span>}
              </div>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

