"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import NutritionalTable from "@/components/NutritionalTable"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calculator } from "lucide-react"

export default function ProductSection({ product, onBack }) {
  const { language } = useLanguage()
  const [serving, setServing] = useState("")
  const [ratio, setRatio] = useState("")
  const [result, setResult] = useState("")

  const handleCalculate = () => {
    const servingSize = Number.parseFloat(serving)
    const insulinRatio = Number.parseFloat(ratio)
    if (isNaN(servingSize) || servingSize <= 0) {
      alert(
        language === "en"
          ? "Please enter a valid serving size in grams."
          : "Por favor, ingresa un tamaño de porción válido en gramos.",
      )
      return
    }
    if (isNaN(insulinRatio) || insulinRatio <= 0) {
      alert(
        language === "en"
          ? "Please enter a valid insulin-to-carb ratio."
          : "Por favor, ingresa una relación insulina/carbohidrato válida.",
      )
      return
    }
    const carbsPer100g = product.nutriments?.carbohydrates_100g
    if (carbsPer100g === undefined) {
      alert(
        language === "en"
          ? "Carbohydrate information is not available for this product."
          : "La información de carbohidratos no está disponible para este producto.",
      )
      return
    }
    const totalCarbs = (carbsPer100g * servingSize) / 100
    let units = totalCarbs / insulinRatio
    units = Math.round(units * 100) / 100
    setResult(units.toString())
  }

  return (
    <div>
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> {translations[language].backBtn}
      </Button>
      <h2 className="text-2xl font-semibold mb-4">{product.product_name}</h2>
      {product.image_front_small_url && (
        <img
          src={product.image_front_small_url || "/placeholder.svg"}
          alt={product.product_name}
          className="w-40 h-40 object-contain mx-auto mb-6"
        />
      )}
      <NutritionalTable product={product} />
      <div className="mt-6">
        <div className="mb-4">
          <label htmlFor="serving" className="block text-sm font-medium mb-2">
            {translations[language].servingLabel}
          </label>
          <Input
            type="number"
            id="serving"
            value={serving}
            onChange={(e) => setServing(e.target.value)}
            placeholder={translations[language].servingPlaceholder}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ratio" className="block text-sm font-medium mb-2">
            {translations[language].ratioLabel}
          </label>
          <Input
            type="number"
            id="ratio"
            value={ratio}
            onChange={(e) => setRatio(e.target.value)}
            placeholder={translations[language].ratioPlaceholder}
          />
        </div>
        <Button onClick={handleCalculate} className="w-full">
          <Calculator className="mr-2 h-4 w-4" /> {translations[language].calculateBtn}
        </Button>
        {result && (
          <div className="mt-4 text-center text-xl font-semibold text-primary">
            {translations[language].insulinUnits}: {result}
          </div>
        )}
      </div>
      <p className="text-xs text-muted-foreground mt-6 text-center">{translations[language].disclaimer}</p>
    </div>
  )
}

