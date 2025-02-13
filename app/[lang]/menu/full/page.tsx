import { playfair } from "../../../../app/fonts"
import Layout from "../../../../components/Layout"
import Link from "next/link"
import { getTranslations } from "../../../../utils/translations"

export default function FullMenu({ params: { lang } }: { params: { lang: string } }) {
  const t = getTranslations(lang)

  const renderMenuSection = (
    title: string,
    items: { name: string; price: number; description?: string; toppings?: string[]; unit?: string }[],
  ) => (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="max-w-3xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col mb-2 pb-2 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-medium">{item.name}</span>
              <span>
                {t.currency}
                {item.price.toFixed(2)}
                {item.unit && <span className="text-sm ml-1">/{item.unit}</span>}
              </span>
            </div>
            {item.description && <span className="text-sm text-gray-600 mt-1">{item.description}</span>}
            {item.toppings && (
              <ul className="text-sm text-gray-600 mt-1 list-disc pl-4">
                {item.toppings.map((topping, i) => (
                  <li key={i}>{topping}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <Layout lang={lang}>
      <div className={`container px-4 md:px-6 mx-auto pt-8 ${playfair.variable}`}>
        <div className="flex justify-end mb-4">
          <Link href={`/${lang}/menu`}>
            <button className="bg-white text-[#54473F] border border-[#54473F] px-4 py-2 rounded-lg font-playfair italic hover:bg-[#54473F] hover:text-white transition-colors">
              {t.backToMenu}
            </button>
          </Link>
        </div>
        <div>
          <h2 className="text-4xl font-playfair italic text-center text-[#54473F] my-8">{t.fullMenuTitle}</h2>
        </div>

        {renderMenuSection(t.antipasti.terra.title, t.antipasti.terra.items)}
        {renderMenuSection(t.antipasti.pesce.title, t.antipasti.pesce.items)}
        {renderMenuSection(t.primi.terra.title, t.primi.terra.items)}
        {renderMenuSection(t.primi.pesce.title, t.primi.pesce.items)}
        {renderMenuSection(t.secondi.terra.title, t.secondi.terra.items)}
        {renderMenuSection(t.secondi.pesce.title, t.secondi.pesce.items)}
        {renderMenuSection(t.contorni.title, t.contorni.items)}
        {renderMenuSection(t.insalatone.title, t.insalatone.items)}
        {renderMenuSection(t.menuBambini.title, t.menuBambini.items)}
        {renderMenuSection(t.pizze.title, t.pizze.items)}
        {renderMenuSection(t.dolci.title, t.dolci.items)}

        <div className="mt-8 text-center">
          <Link
            href={`/${lang}/menu`}
            className="inline-block bg-[#594a47] text-white px-6 py-3 rounded-lg hover:bg-[#594a47]/80 transition-colors shadow-md"
          >
            {t.backToMenu}
          </Link>
        </div>
      </div>
    </Layout>
  )
}

