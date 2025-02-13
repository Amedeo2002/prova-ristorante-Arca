import Image from "next/image"
import Layout from "../../../components/Layout"

const translations = {
  it: {
    title: "L'Arca",
    content: [
      "Nel cuore di Bardolino, il nostro ristorante offre un'esperienza unica tra sapori autentici e una vista mozzafiato sul Lago di Garda. Piatti di carne selezionata e specialità mediterranee, preparati con ingredienti di qualità e attenzione alla stagionalità.",
      "Le nostre pizze sono realizzate con impasti a lunga lievitazione e farine ai 7 cereali per un gusto autentico. Non manca la pasticceria artigianale con dolci tipici della tradizione.",
      "Ad accompagnare ogni piatto, una selezione di vini locali e birre artigianali. Un ambiente accogliente perfetto per cene romantiche, pranzi tra amici o eventi speciali.",
      "Vieni a trovarci e lasciati conquistare dai sapori del Lago di Garda!",
    ],
    welcome:
      "Benvenuti all'ARCA, un ristorante e pizzeria a Bardolino, in provincia di Verona. Offriamo un menù classico con piatti preparati con ingredienti di qualità e un'ampia scelta di pizze. Il nostro ristorante è perfetto per una cena in famiglia, una serata tra amici o un pranzo rilassante vicino al Lago di Garda.",
    imageAlt: "Immagine del Ristorante Pizzeria ARCA",
    poolSunset: "Tramonto sulla piscina dell'ARCA",
    poolView: "Vista della piscina e del Lago di Garda",
    aerialView: "Vista aerea del Ristorante ARCA",
  },
  en: {
    title: "The Arca",
    content: [
      "In the heart of Bardolino, our restaurant offers a unique experience combining authentic flavors and a breathtaking view of Lake Garda. We serve selected meat dishes and Mediterranean specialties, prepared with quality ingredients and attention to seasonality.",
      "Our pizzas are made with long-leavened dough and 7-grain flours for an authentic taste. We also offer artisanal pastries with traditional desserts.",
      "To accompany each dish, we have a selection of local wines and craft beers. A welcoming environment perfect for romantic dinners, lunches with friends, or special events.",
      "Come visit us and let yourself be conquered by the flavors of Lake Garda!",
    ],
    welcome:
      "Welcome to ARCA, a restaurant and pizzeria in Bardolino, in the province of Verona. We offer a classic menu with dishes prepared using quality ingredients and a wide selection of pizzas. Our restaurant is perfect for a family dinner, an evening with friends, or a relaxing lunch near Lake Garda.",
    imageAlt: "Image of Ristorante Pizzeria ARCA",
    poolSunset: "Sunset at ARCA's pool",
    poolView: "View of the pool and Lake Garda",
    aerialView: "Aerial view of Ristorante ARCA",
  },
  de: {
    title: "Die Arca",
    content: [
      "Im Herzen von Bardolino bietet unser Restaurant ein einzigartiges Erlebnis zwischen authentischen Aromen und einem atemberaubenden Blick auf den Gardasee. Wir servieren ausgewählte Fleischgerichte und mediterrane Spezialitäten, zubereitet mit hochwertigen Zutaten und Rücksicht auf die Saisonalität.",
      "Unsere Pizzen werden mit lang gereiftem Teig und 7-Korn-Mehl für einen authentischen Geschmack hergestellt. Wir bieten auch hausgemachte Konditorei mit traditionellen Desserts.",
      "Zu jedem Gericht gibt es eine Auswahl an lokalen Weinen und Craft-Bieren. Eine einladende Umgebung, perfekt für romantische Abendessen, Mittagessen mit Freunden oder besondere Anlässe.",
      "Besuchen Sie uns und lassen Sie sich von den Aromen des Gardasees erobern!",
    ],
    welcome:
      "Willkommen bei ARCA, einem Restaurant und einer Pizzeria in Bardolino in der Provinz Verona. Wir bieten ein klassisches Menü mit Gerichten aus hochwertigen Zutaten und einer großen Auswahl an Pizzen. Unser Restaurant ist perfekt für ein Familienessen, einen Abend mit Freunden oder ein entspanntes Mittagessen in der Nähe des Gardasees.",
    imageAlt: "Bild von Ristorante Pizzeria ARCA",
    poolSunset: "Sonnenuntergang am ARCA-Pool",
    poolView: "Blick auf den Pool und den Gardasee",
    aerialView: "Luftaufnahme von Ristorante ARCA",
  },
}

export default function Arca({ params: { lang } }: { params: { lang: string } }) {
  const t = translations[lang as keyof typeof translations] || translations.it

  return (
    <Layout lang={lang}>
      <div className="bg-white text-[#594a47] py-8 px-4 rounded-lg mt-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-serif transition-all duration-300 ease-in-out transform hover:scale-105">
          {t.title}
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 transition-all duration-500 ease-in-out transform hover:translate-x-2">
              {t.content.slice(0, 2).map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md transition-all duration-500 ease-in-out transform hover:translate-y-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arca_10-bkB9CM7pBr8JhV27vDudD4NrD8YimN.jpeg"
                alt={t.poolSunset}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md md:order-2 transition-all duration-500 ease-in-out transform hover:translate-y-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC0702.jpg-X22L8v22aUDKlz1y55dZh8iT7KWYgV.jpeg"
                alt={t.poolView}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 md:order-1 transition-all duration-500 ease-in-out transform hover:translate-x-2">
              {t.content.slice(2).map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md mb-16 transition-all duration-500 ease-in-out transform hover:translate-y-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arca%20dall'alto.jpg-uYGUNGrqu8XuD6UBKRs9wFBmQbJEDl.jpeg"
              alt={t.aerialView}
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-[#F5F5F0] p-8 rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:translate-y-2">
            <p className="text-lg leading-relaxed italic">{t.welcome}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

