// components/theme-debug.tsx
"use client"
import { useTheme } from "./theme-provider"

export function ThemeDebug() {
  const { theme } = useTheme()
  
  return (
    <div className="fixed bottom-4 right-4 z-50 p-2 bg-black text-white text-xs">
      Current theme: {theme}
    </div>
  )
}
