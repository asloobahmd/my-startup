/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "480px",
        md: "630px",
        xmd: "768px",
        xxmd: "976px",
        lg: "1200px",
        xl: "1300px",
      },
    },
    screens: {
      sm: "480px",
      smm: "768px",
      md: "976px",
      lg: "1200px",
      xl: "1300px",
    },
    extend: {
      colors: {
        brand: {
          primary: "#0A0A0A",
        },
        accent: {
          // dark: "#00509D",
          // darker: "#003F88",
          dark: "#FADC07",
          darker: "#FADC07",
        },
        accenttext: "#000000",
        // accenttext: "#FFFFFF",
        graytext: "#999999",
      },
      fontFamily: {
        roboto: "Roboto",
        montserrat: "Montserrat",
        inter: "Inter",
        instrumentSerif: "Instrument Serif",
      },
      backgroundImage: {
        banner:
          "url('https://i.pinimg.com/736x/35/3a/c9/353ac92b7daf02f0c772b7d36f740f1e.jpg')",
      },
    },
  },
  plugins: [],
};
