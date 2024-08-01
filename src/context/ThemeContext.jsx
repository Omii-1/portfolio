import { createContext, useContext, useState, useEffect } from "react";


const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  )

  useEffect(() => {
    document.body.setAttribute("class", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "dark" ? "light" : "dark")
  }

  return(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}