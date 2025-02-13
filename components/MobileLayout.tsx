"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown, Facebook, Instagram } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { playfair } from "../app/fonts"
import type React from "react"

const translations = {
  it: {
    footer: "Tutti i diritti riservati. Designed by Amedeo Spahija",
    phone: "Tel.: 045 9232674",
    address: "Str. Dell'Arca, 3, 37011 Bardolino VR",
    openMap: "Apri in Google Maps",
    hours: "Orari di apertura: dalle 8:00 alle 22:30 tutti i giorni",
    book: "PRENOTA",
    home: "HOME",
    arca: "ARCA",
    menu: "MENÙ",
    gallery: "GALLERIA",
  },
  en: {
    footer: "All rights reserved. Designed by Amedeo Spahija",
    phone: "Tel.: 045 9232674",
    address: "Str. Dell'Arca, 3, 37011 Bardolino VR",
    openMap: "Open in Google Maps",
    hours: "Opening hours: 8:00 AM - 10:30 PM daily",
    book: "BOOK",
    home: "HOME",
    arca: "ARCA",
    menu: "MENU",
    gallery: "GALLERY",
  },
  de: {
    footer: "Alle Rechte vorbehalten. Designed by Amedeo Spahija",
    phone: "Tel.: 045 9232674",
    address: "Str. Dell'Arca, 3, 37011 Bardolino VR",
    openMap: "In Google Maps öffnen",
    hours: "Öffnungszeiten: täglich von 8:00 bis 22:30 Uhr",
    book: "RESERVIEREN",
    home: "HOME",
    arca: "ARCA",
    menu: "MENÜ",
    gallery: "GALERIE",
  },
}

const languages = [
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
]

export default function MobileLayout({
  children,
  lang,
}: {
  children: React.ReactNode
  lang: string
}) {
  const t = translations[lang as keyof typeof translations] || translations.it
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen)
  }

  const handleLanguageChange = (langCode: string) => {
    const newPath = pathname?.replace(/^\/[^/]+/, `/${langCode}`) || `/${langCode}`
    setIsLangMenuOpen(false)
    router.push(newPath)
  }

  const currentLang = languages.find((l) => l.code === lang) || languages[0]

  return (
    <div className={`min-h-screen bg-white text-[#594a47] ${playfair.variable}`}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#594a47] shadow-md">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="w-16 h-16 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20Arca-IZhKpNDGNr6X80HiR8mHx97H9BSsHv.png"
                alt="Bar Ristorante Pizzeria Arca"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-xl font-bold italic text-white font-playfair">Ristorante Pizzeria ARCA</h1>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <button onClick={toggleLangMenu} className="text-white flex items-center">
                  <span className="text-2xl">{currentLang.flag}</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button onClick={toggleMenu} className="text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <nav className="fixed top-20 left-0 right-0 bg-[#594a47] z-40 shadow-md">
          <div className="container mx-auto px-4 py-4 pr-8">
            <ul className="space-y-4 text-right">
              {Object.entries(t)
                .filter(([key]) => ["home", "arca", "menu", "gallery"].includes(key))
                .map(([key, value]) => (
                  <li key={key} className="relative mb-4">
                    <Link
                      href={`/${lang}${key === "home" ? "" : `/${key}`}`}
                      className="text-white hover:text-white/80 transition-colors tracking-wider text-lg inline-block relative pb-1"
                      onClick={toggleMenu}
                    >
                      {value}
                      {pathname === `/${lang}${key === "home" ? "" : `/${key}`}` && (
                        <span className="absolute bottom-0 right-0 h-[2px] bg-white" style={{ width: "100%" }}></span>
                      )}
                    </Link>
                  </li>
                ))}
              <li className="mt-6">
                <Link
                  href={`/${lang}/prenota`}
                  className="bg-white text-[#594a47] px-6 py-2 rounded-lg font-bold hover:bg-white/90 transition-colors text-lg inline-block"
                  onClick={toggleMenu}
                >
                  {t.book}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}

      <main className="container mx-auto px-4 py-8 mt-24">{children}</main>

      <footer className="bg-[#594a47] text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col space-y-6 text-center mb-4">
            <div>
              {t.hours}
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href="https://www.facebook.com/share/19qkzT4yL7/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/80 p-2 rounded-full hover:bg-black transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/ristorante_pizzeria_arca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/80 p-2 rounded-full hover:bg-black transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
            <div>
              <p>{t.address}</p>
              <a
                href="https://www.google.com/maps/place/Ristorante+Pizzeria+ARCA/@45.561199,10.7156218,16z/data=!3m1!4b1!4m6!3m5!1s0x4781f3ab424ac7f5:0xd8cbac3fbac93577!8m2!3d45.561199!4d10.7181967!16s%2Fg%2F11vt7ys4nl?entry=ttu"
                className="underline hover:no-underline block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.openMap}
              </a>
              <p className="whitespace-nowrap">Tel.: {t.phone}</p>
            </div>
          </div>
          <div className="text-xs opacity-75 text-center border-t border-white/20 pt-4">
            © 2025 Ristorante Pizzeria Arca. {t.footer}
          </div>
        </div>
      </footer>
    </div>
  )
}

