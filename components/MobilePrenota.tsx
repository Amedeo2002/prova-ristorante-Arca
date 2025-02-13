import { Phone } from "lucide-react"

const translations = {
  it: {
    title: "Prenota un Tavolo",
    callUs: "Chiamaci per prenotare",
    mapTitle: "Dove Siamo",
    hours: "Orari di apertura: dalle 8:00 alle 22:30 tutti i giorni",
  },
  en: {
    title: "Book a Table",
    callUs: "Call us to book",
    mapTitle: "Where We Are",
    hours: "Opening hours: 8:00 AM - 10:30 PM daily",
  },
  de: {
    title: "Tisch Reservieren",
    callUs: "Rufen Sie uns an, um zu reservieren",
    mapTitle: "Wo Wir Sind",
    hours: "Öffnungszeiten: täglich von 8:00 bis 22:30 Uhr",
  },
}

export default function MobilePrenota({ lang }: { lang: string }) {
  const t = translations[lang as keyof typeof translations] || translations.it

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">{t.title}</h1>

      <div className="bg-[#3F4F44] text-[#DCD7C9] p-6 rounded-lg shadow-lg mb-8 text-center">
        <h2 className="text-xl font-semibold mb-2">{t.callUs}</h2>
        <a
          href="tel:+390459232674"
          className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center justify-center hover:underline mb-4 whitespace-nowrap"
        >
          <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
          (+39) 045 9232674
        </a>
        <p className="text-base text-[#CBD2A4]">{t.hours}</p>
      </div>

      <h2 className="text-xl font-bold mb-4">{t.mapTitle}</h2>
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.7890532769474!2d10.715622815755!3d45.56119897910211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781f3ab424ac7f5%3A0xd8cbac3fbac93577!2sRistorante%20Pizzeria%20ARCA!5e0!3m2!1sen!2sit!4v1675963112374!5m2!1sen!2sit"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

