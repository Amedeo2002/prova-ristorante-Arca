"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "./Navbar"
import LanguageSelector from "./LanguageSelector"
import ClientLanguageSelector from "./ClientLanguageSelector"
import type React from "react"
import { playfair } from "../app/fonts"
import { Facebook, Instagram } from "lucide-react"

const translations = {
  it: {
    footer: "Tutti i diritti riservati. Designed by Amedeo Spahija",
    phone: "045 9232674",
    address: "Str. Dell'Arca, 3, 37011 Bardolino VR",
    openMap: "Apri in Google Maps",
    hours: "Orari di apertura: dalle 8:00 alle 22:30 tutti i giorni",
    book: "PRENOTA",
  },
  en: {
    footer: "All rights reserved. Designed by Amedeo Spahija",
    phone: "045 9232674",
    address: "Str. Dell'Arca, 3, 37011 Bardolino VR",
    openMap: "Open in Google Maps",
    hours: "Opening hours: 8:00 AM - 10:30 PM daily",
    book: "BOOK",
  },
  de: {
    footer: "Alle Rechte vorbehalten. Designed by Amedeo Spahija",
    phone: "045 9232674",
    address: "Str. Dell'Arca, 3, 37011 Bardolino VR",
    openMap: "In Google Maps öffnen",
    hours: "Öffnungszeiten: täglich von 8:00 bis 22:30 Uhr",
    book: "RESERVIEREN",
  },
}

export default function DesktopLayout({
  children,
  lang,
}: {
  children: React.ReactNode
  lang: string
}) {
  const t = translations[lang as keyof typeof translations] || translations.it
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsAtTop(currentScrollY < 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`min-h-screen bg-white text-[#594a47] ${playfair.variable}`}>
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        {/* Header grande */}
        <div
          className={`bg-[#54473F] transition-all duration-300 ${
            isAtTop ? "opacity-100 visible" : "opacity-0 invisible h-0 overflow-hidden"
          }`}
        >
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold italic text-center text-white font-serif py-2">
              Ristorante Pizzeria ARCA
            </h1>
            <div className="flex items-center justify-between py-2 px-4 lg:px-8">
              <div className="w-20 h-20 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20Arca-IZhKpNDGNr6X80HiR8mHx97H9BSsHv.png"
                  alt="Bar Ristorante Pizzeria Arca"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex-grow max-w-3xl mx-4 lg:mx-8">
                <Navbar lang={lang} isSmall={false} />
              </div>
              <div className="flex flex-col items-end gap-2 lg:gap-4">
                <LanguageSelector currentLang={lang} />
                <Link href={`/${lang}/prenota`}>
                  <button className="bg-white text-[#594a47] px-3 lg:px-4 py-2 rounded-full font-bold hover:bg-[#54473F] hover:text-white transition-colors text-sm whitespace-nowrap">
                    {t.book}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Header piccolo */}
        <div
          className={`bg-[#9A7E6F]/95 backdrop-blur-sm transition-all duration-300 ${
            isAtTop ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
        >
          <div className="container mx-auto py-2 px-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20Arca-IZhKpNDGNr6X80HiR8mHx97H9BSsHv.png"
                  alt="Bar Ristorante Pizzeria Arca"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-lg font-bold italic text-white font-serif">Ristorante Pizzeria ARCA</h2>
            </div>
            <div className="flex-grow max-w-2xl mx-4">
              <Navbar lang={lang} isSmall={true} />
            </div>
            <div className="flex flex-col items-end gap-2">
              <ClientLanguageSelector currentLang={lang} />
              <Link href={`/${lang}/prenota`}>
                <button className="bg-white text-[#594a47] px-3 py-1 rounded-full border border-[#594a47] font-bold hover:bg-[#54473F] hover:text-white transition-colors text-xs whitespace-nowrap">
                  {t.book}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto pt-36 pb-8">{children}</main>

      <footer className="bg-[#594a47] text-white">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-3 gap-8 items-start mb-4">
            <div></div>
            <div className="text-center">
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
            <div className="text-right">
              <p>{t.address}</p>
              <a
                href="https://www.google.com/maps/place/Ristorante+Pizzeria+ARCA/@45.561199,10.7156218,16z/data=!3m1!4b1!4m6!3m5!1s0x4781f3ab424ac7f5:0xd8cbac3fbac93577!8m2!3d45.561199!4d10.7181967!16s%2Fg%2F11vt7ys4nl?entry=ttu"
                className="underline hover:no-underline block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.openMap}
              </a>
              <p>Tel.: {t.phone}</p>
            </div>
          </div>
          <div className="text-xs opacity-75 border-t border-white/20 pt-4">
            © 2025 Ristorante Pizzeria Arca. {t.footer}
          </div>
        </div>
      </footer>
    </div>
  )
}

