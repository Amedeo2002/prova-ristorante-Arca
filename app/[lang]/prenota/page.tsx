"use client"
import Layout from "../../../components/Layout"
import { Phone, Clock, MapPin } from "lucide-react"

const translations = {
  it: {
    title: "Prenota un Tavolo",
    callUs: "Chiamaci per prenotare",
    mapTitle: "Dove Siamo",
    hours: "Orari di apertura: dalle 8:00 alle 22:30 tutti i giorni",
    address: "Str. Dell'Arca, 3, 37011 Bardolino VR",
  },
  en: {
    title: "Book a Table",
    callUs: "Call us to book",
    mapTitle: "Where We Are",
    hours: "Opening hours: 8:00 AM - 10:30 PM daily",
    address: "Str. Dell'Arca, 3, 37011 Bardolino VR",
  },
  de: {
    title: "Tisch Reservieren",
    callUs: "Rufen Sie uns an, um zu reservieren",
    mapTitle: "Wo Wir Sind",
    hours: "Öffnungszeiten: täglich von 8:00 bis 22:30 Uhr",
    address: "Str. Dell'Arca, 3, 37011 Bardolino VR",
  },
}

export default function Prenota({ params: { lang } }: { params: { lang: string } }) {
  const t = translations[lang as keyof typeof translations] || translations.it

  return (
    <Layout lang={lang}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center font-serif">{t.title}</h1>

        <div className="space-y-12">
          <div className="bg-[#3F4F44] text-[#DCD7C9] p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">{t.callUs}</h2>
            <a
              href="tel:+390459232674"
              className="text-xl sm:text-2xl lg:text-3xl font-bold flex items-center justify-center hover:underline mb-4 whitespace-nowrap"
            >
              <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              (+39) 045 9232674
            </a>
            <p className="text-[#CBD2A4] flex items-center justify-center">
              <Clock className="mr-2" />
              {t.hours}
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">{t.mapTitle}</h2>
            <p className="flex items-center justify-center mb-4">
              <MapPin className="mr-2" />
              {t.address}
            </p>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
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
    </Layout>
  )
}

