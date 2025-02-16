"use client"

import { createContext, useContext, useState, useEffect } from "react"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es")

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage
    if (userLang && userLang.startsWith("en")) {
      setLanguage("en")
    }
  }, [])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}

