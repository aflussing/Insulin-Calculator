"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { searchProducts } from "@/utils/api"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function SearchSection({ onProductSelect }) {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      alert(language === "en" ? "Please enter a product name." : "Por favor, ingrese un nombre de producto.")
      return
    }
    const results = await searchProducts(searchQuery)
    setSearchResults(results)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">{translations[language].mainTitle}</h1>
      <p className="text-center text-muted-foreground mb-6">{translations[language].mainDescription}</p>
      <div className="mb-4">
        <label htmlFor="searchInput" className="block text-sm font-medium mb-2">
          {translations[language].searchLabel}
        </label>
        <div className="flex gap-2">
          <Input
            type="text"
            id="searchInput"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={translations[language].searchPlaceholder}
          />
          <Button onClick={handleSearch}>
            <Search className="mr-2 h-4 w-4" /> {translations[language].searchBtn}
          </Button>
        </div>
      </div>
      <div className="mt-6">
        {searchResults.map((product) => (
          <div
            key={product.id}
            onClick={() => onProductSelect(product)}
            className="flex items-center p-3 border-b border-border cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {product.image_small_url && (
              <img
                src={product.image_small_url || "/placeholder.svg"}
                alt={product.product_name}
                className="w-16 h-16 object-contain mr-4"
              />
            )}
            <div className="flex flex-col">
              <span className="font-medium">{product.product_name}</span>
              {product.stores && (
                <span className="text-sm text-muted-foreground">
                  {translations[language].store} {product.stores}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

