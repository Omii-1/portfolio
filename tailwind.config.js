/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
      backgroundImage:{
        circularLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 120px);",
        circularDark: "repeating-radial-gradient(rgba(255, 255, 255, 0.5) 2px, #1b1b1b 8px, #1b1b1b 120px);",
        circularLightLg: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);",
        circularDarkLg: "repeating-radial-gradient(rgba(255, 255, 255, 0.5) 2px, #1b1b1b 8px, #1b1b1b 100px);",
        circularLightMd: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 80px);",
        circularDarkMd: "repeating-radial-gradient(rgba(255, 255, 255, 0.5) 2px, #1b1b1b 8px, #1b1b1b 80px);",
        circularLightSm: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 60px);",
        circularDarkSm: "repeating-radial-gradient(rgba(255, 255, 255, 0.5) 2px, #1b1b1b 8px, #1b1b1b 60px);",
      }
    },
    screens:{
      "2xl": {max: "1535px"},
      "xl": {max: "1279px"},
      "lg": {max: "1023px"},
      "md": {max: "767px"},
      "sm": {max: "639px"},
      "xs": {max: "479px"}
    }
  },
  plugins: [],
};
