"use client"

import { useState } from "react"
import LanguageSelector from "@/components/LanguageSelector"
import SearchSection from "@/components/SearchSection"
import ProductSection from "@/components/ProductSection"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <LanguageSelector />
            <ThemeToggle />
          </div>
          <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto">
            {selectedProduct ? (
              <ProductSection product={selectedProduct} onBack={() => setSelectedProduct(null)} />
            ) : (
              <SearchSection onProductSelect={setSelectedProduct} />
            )}
          </div>
        </div>
      </div>
    </LanguageProvider>
  )
}

