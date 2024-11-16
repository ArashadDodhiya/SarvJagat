import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Define the props manually if not available in the public API
type ThemeProviderProps = {
  children: React.ReactNode
  [key: string]: unknown  // You can add any other prop types that might be passed to NextThemesProvider
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
