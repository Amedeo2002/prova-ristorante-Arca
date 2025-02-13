"use client"

import { useState } from "react"
import { getTranslations } from "../../../utils/translations"
import Layout from "../../../components/Layout"
import Link from "next/link"
import { motion } from "framer-motion"

const categories = ["antipasti", "primi", "secondi", "pizze", "dolci"] as const
type Category = (typeof categories)[number]

export default function Menu({ params: { lang } }: { params: { lang: string } }) {
  const t = getTranslations(lang)
  const [selectedCategory, setSelectedCategory] = useState<Category>("antipasti")

  const renderMenuItems = (
    items: { name: string; description?: string; price: number; unit?: string; toppings?: string[] }[],
  ) => (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 * index }}
          className="flex items-baseline group"
        >
          <div className="flex-none max-w-[60%]">
            <h3 className="text-lg font-medium text-[#54473F] group-hover:text-[#54473F]/80 transition-colors">
              {item.name}
            </h3>
            {item.description && <p className="text-sm text-[#54473F]/70 mt-1">{item.description}</p>}
            {item.toppings && (
              <ul className="text-sm text-[#54473F]/70 mt-1 list-disc pl-4">
                {item.toppings.map((topping, i) => (
                  <li key={i}>{topping}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex-grow mx-4 border-b border-dotted border-[#54473F]/30 relative">
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#54473F]/30 to-transparent"></div>
          </div>
          <div className="flex-none">
            <span className="font-medium text-[#54473F]">
              €{item.price.toFixed(2)}
              {item.unit && <span className="text-sm ml-1">/{item.unit}</span>}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  )

  return (
    <Layout lang={lang}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-playfair italic text-center text-[#54473F] mb-16"
        >
          {t.title}
        </motion.h1>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 w-full px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm sm:text-base font-medium tracking-wide
                ${
                  selectedCategory === category
                    ? "bg-[#54473F] text-white shadow-lg transform -translate-y-0.5"
                    : "bg-gray-100 text-[#54473F] hover:bg-gray-200"
                }
              `}
            >
              {t.categories[category]}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-12 mb-16">
          {selectedCategory === "antipasti" && (
            <>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#54473F] mb-8 text-center">{t.antipasti.terra.title}</h2>
                {renderMenuItems(t.antipasti.terra.items)}
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#54473F] mb-8 text-center">{t.antipasti.pesce.title}</h2>
                {renderMenuItems(t.antipasti.pesce.items)}
              </div>
            </>
          )}

          {selectedCategory === "primi" && (
            <>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#54473F] mb-8 text-center">{t.primi.terra.title}</h2>
                {renderMenuItems(t.primi.terra.items)}
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#54473F] mb-8 text-center">{t.primi.pesce.title}</h2>
                {renderMenuItems(t.primi.pesce.items)}
              </div>
            </>
          )}

          {selectedCategory === "secondi" && (
            <>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#54473F] mb-8 text-center">{t.secondi.terra.title}</h2>
                {renderMenuItems(t.secondi.terra.items)}
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#54473F] mb-8 text-center">{t.secondi.pesce.title}</h2>
                {renderMenuItems(t.secondi.pesce.items)}
              </div>
            </>
          )}

          {selectedCategory === "pizze" && (
            <>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#54473F] mb-8 text-center">{t.pizze.title}</h2>
                {renderMenuItems(t.pizze.items)}
              </div>
            </>
          )}

          {selectedCategory === "dolci" && (
            <>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#54473F] mb-8 text-center">{t.dolci.title}</h2>
                {renderMenuItems(t.dolci.items)}
              </div>
            </>
          )}
        </div>

        {/* Full Menu Button */}
        <div className="text-center">
          <Link href={`/${lang}/menu/full`}>
            <button className="bg-[#3F4F44] text-[#DCD7C9] px-8 py-4 rounded-lg text-lg font-medium tracking-wide hover:bg-[#3F4F44]/90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg">
              {t.viewFullMenu}
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

