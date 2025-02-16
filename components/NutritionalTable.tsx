"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const nutrientsToDisplay = [
  "energy-kcal_100g",
  "carbohydrates_100g",
  "fat_100g",
  "saturated-fat_100g",
  "sugars_100g",
  "proteins_100g",
  "salt_100g",
  "fiber_100g",
]

export default function NutritionalTable({ product }) {
  const { language } = useLanguage()
  const t = translations[language]

  if (!product.nutriments) {
    return (
      <p className="text-muted-foreground mt-2">
        {language === "en"
          ? "Nutritional information not available for this product."
          : "Información nutricional no disponible para este producto."}
      </p>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t.nutrientHeader}</TableHead>
          <TableHead>{t.valueHeader}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {nutrientsToDisplay.map(
          (nutrient) =>
            product.nutriments[nutrient] !== undefined && (
              <TableRow key={nutrient}>
                <TableCell>{t.nutrients[nutrient]}</TableCell>
                <TableCell>{product.nutriments[nutrient]}</TableCell>
              </TableRow>
            ),
        )}
      </TableBody>
    </Table>
  )
}

