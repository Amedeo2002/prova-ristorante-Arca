"use client"

import { getTranslations } from "../../utils/translations"
import { useState, useEffect } from "react"
import Image from "next/image"
import Layout from "../../components/Layout"
import Link from "next/link"
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image1-Ysx0aTwGye1K731xIUlWQoyPl9MHIw.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image2-2ZMms2svDnqfVoZr4sCioFDpB9jZLL.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC0702.jpg-8yVRHJqzaBGDJ4RYnVGmMZKZhgaPBN.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image4-C4U973kUVBhytPJBU685sjALr2FPme.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image6-4F5YTguvMxAO0UEXcCyT9cDD1HACNZ.png",
]

export default function Home({ params: { lang } }: { params: { lang: string } }) {
  const t = getTranslations(lang)
  const [currentImage, setCurrentImage] = useState(0)
  const [showControls, setShowControls] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length)
  }

  return (
    <Layout lang={lang}>
      <section className="-mt-48 pt-48">
        <div
          className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          {images.map((src, index) => (
            <img
              key={src}
              src={src || "/placeholder.svg"}
              alt={`${t.imageAlt} ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform: `scale(${index === currentImage ? 1 : 1.1})`,
                transition: "transform 5s ease-out",
              }}
            />
          ))}
          {showControls && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-[#54473F]" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-[#54473F]" />
              </button>
            </>
          )}
        </div>
        <div className="flex justify-center space-x-2 py-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full ${index === currentImage ? "bg-[#54473F]" : "bg-[#54473F]/30"}`}
            />
          ))}
        </div>
      </section>

      <section className="relative bg-[#F5F5F0] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 transition-all duration-500 ease-in-out transform hover:translate-x-2">
              <h2 className="text-6xl font-serif text-[#54473F]">{t.aboutTitle}</h2>
              <p className="text-lg font-sans text-[#54473F] leading-relaxed">{t.description}</p>
              <div className="pt-6">
                <Link href={`/${lang}/arca`}>
                  <button className="bg-[#54473F] text-white px-8 py-3 rounded hover:bg-[#54473F]/90 transition-colors">
                    {t.discoverMore}
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative transition-all duration-500 ease-in-out transform hover:translate-y-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About%20us(2)-dRdkWiJmz9sOuXCc3kMtkGgyJkPv4F.png"
                alt="Vista del Ristorante Arca"
                width={800}
                height={600}
                className="w-full h-auto rounded-[2rem] shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto transition-all duration-500 ease-in-out transform hover:translate-y-2">
            <h2 className="text-5xl font-serif text-[#54473F] text-center mb-16">{t.specialties.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.specialties.items.map((item, index) => (
                <Link href={`/${lang}/gallery`} key={index}>
                  <div className="group relative overflow-hidden cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
                    <div className="bg-gradient-to-br from-[#54473F] to-[#9A7E6F] p-8 rounded-2xl shadow-lg">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      <p className="text-lg font-sans text-white leading-relaxed relative z-10">{item}</p>
                      <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/5 rounded-tl-[100%] pointer-events-none"></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F0] py-20">
        <div className="container mx-auto px-4">
          <div className="transition-all duration-500 ease-in-out transform hover:translate-y-2">
            <h2 className="text-5xl font-serif text-[#54473F] text-center mb-12">{t.findUs.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-xl font-sans text-[#54473F] leading-relaxed">{t.findUs.description}</p>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-[#54473F]" />
                  <p className="text-lg font-sans text-[#54473F]">Str. Dell'Arca, 3, 37011 Bardolino VR</p>
                </div>
              </div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.7890532769474!2d10.715622815755!3d45.56119897910211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781f3ab424ac7f5%3A0xd8cbac3fbac93577!2sRistorante%20Pizzeria%20ARCA!5e0!3m2!1sen!2sit!4v1675963112374!5m2!1sen!2sit"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-xl mx-auto text-center transition-all duration-300 ease-in-out transform hover:scale-105">
          <Link href={`/${lang}/prenota`}>
            <button className="bg-[#54473F] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#54473F]/90 transition-colors">
              {t.book}
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

