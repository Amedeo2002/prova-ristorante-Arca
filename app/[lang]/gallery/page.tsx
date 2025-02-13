"use client"

import { useState } from "react"
import Image from "next/image"
import Layout from "../../../components/Layout"

const translations = {
  it: {
    hero: {
      title: "La Vista Mozzafiato",
      subtitle: "Un panorama unico sul Lago di Garda",
    },
    sections: {
      location: "La Nostra Location",
      cuisine: "La Nostra Cucina",
      breakfast: "La Nostra Colazione",
      aperitivo: "I Nostri Aperitivi",
    },
    imageAlt: {
      sunset: "Tramonto sulla piscina dell'ARCA",
      pool: "Vista della piscina e del Lago di Garda",
      dish: "Piatto gourmet dell'ARCA",
      cocktails: "Aperitivi con vista lago",
      breakfast: "Colazione a bordo piscina",
      pizza: "Pizza artigianale dell'ARCA",
    },
  },
  en: {
    hero: {
      title: "Breathtaking View",
      subtitle: "A unique panorama of Lake Garda",
    },
    sections: {
      location: "Our Location",
      cuisine: "Our Cuisine",
      breakfast: "Our Breakfast",
      aperitivo: "Our Aperitifs",
    },
    imageAlt: {
      sunset: "Sunset at ARCA's pool",
      pool: "View of the pool and Lake Garda",
      dish: "ARCA's gourmet dish",
      cocktails: "Aperitifs with lake view",
      breakfast: "Poolside breakfast",
      pizza: "ARCA's artisanal pizza",
    },
  },
  de: {
    hero: {
      title: "Atemberaubender Ausblick",
      subtitle: "Ein einzigartiges Panorama des Gardasees",
    },
    sections: {
      location: "Unser Standort",
      cuisine: "Unsere Küche",
      breakfast: "Unser Frühstück",
      aperitivo: "Unsere Aperitifs",
    },
    imageAlt: {
      sunset: "Sonnenuntergang am ARCA-Pool",
      pool: "Blick auf den Pool und den Gardasee",
      dish: "ARCA's Gourmetgericht",
      cocktails: "Aperitifs mit Seeblick",
      breakfast: "Frühstück am Pool",
      pizza: "ARCA's hausgemachte Pizza",
    },
  },
}

export default function Gallery({ params: { lang } }: { params: { lang: string } }) {
  const t = translations[lang as keyof typeof translations] || translations.it
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <Layout lang={lang}>
      {/* Hero Section */}
      <section className="relative h-screen -mt-36 overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tramonto%20arca-GCf1fMajHuoG8fykFjx2tHZ5SWb54c.jpeg"
          alt={t.imageAlt.sunset}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white" style={{ top: "60%" }}>
          <h1 className="text-5xl md:text-7xl font-serif text-center px-4 mb-4">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl text-center px-4">{t.hero.subtitle}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Location Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-serif text-center mb-12">{t.sections.location}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vista%20lago.jpg-mlG1pDqCbprPBNicd6FU11GIy6zk0i.jpeg"
                alt={t.imageAlt.pool}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image4-CH6Li6rJwJWsiU9IbKKC6sxfD8b4PO.png"
                alt={t.imageAlt.dish}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </section>

        {/* Cuisine Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-serif text-center mb-12">{t.sections.cuisine}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/piatti%20arca-fqE1SP6T8yqsWE1qFRvbdki0zYZlrS.png"
                alt={t.imageAlt.dish}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/piatto%20arca%203-nNpH6HobAPeZ5djidIEi2lWCVs6Nrn.png"
                alt={t.imageAlt.pizza}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pizza%20arca-yUEt57K2qDaCwF6OHLU7B8xoBoiR7s.png"
                alt={t.imageAlt.pizza}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </section>

        {/* Breakfast Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-serif text-center mb-12">{t.sections.breakfast}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/colazione%20arca%202-HserNrs6cgcwQBUnvZCzgxTTu8VQuz.png"
                alt={t.imageAlt.breakfast}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/colazione%20arca-ApIRIrbobuVf0JFxb3yKCtNsw621hz.png"
                alt={t.imageAlt.breakfast}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </section>

        {/* Aperitivo Section */}
        <section>
          <h2 className="text-4xl font-serif text-center mb-12">{t.sections.aperitivo}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aperitivi%20arca%202-vaMxnrWnUO572GlJS7MCAmjxjVWBnX.png"
                alt={t.imageAlt.cocktails}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aperitivi%20arca-aT5MqaOTpV8gRGzyiQ7D6d9WKVqiVH.png"
                alt={t.imageAlt.cocktails}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-6xl h-[80vh]">
            <Image src={selectedImage || "/placeholder.svg"} alt="" fill className="object-contain" />
          </div>
        </div>
      )}
    </Layout>
  )
}

