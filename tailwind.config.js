/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "480px",
        md: "768px",
        xmd: "630px",
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
          dark: "#FF4533",
          darker: "#D43F2F",
        },
        mymateblack: "#0A0A0A",
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
