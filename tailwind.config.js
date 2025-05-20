/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          background: "#F5F7FA",
        },
        blue: {
          primary: {
            DEFAULT: "#3B5E88",
            100: "#3B5E88",
            200: "#000E31",
          },
          light: {
            100: "#1F8CEB",
          },
          dark: {
            100: "#292D32",
            700: "#00355B",
          },
          DEFAULT: "#3B5E88",
          gray: {
            100: "#ABBED1",
            opacity: {
              20: "rgba(171, 190, 209, 0.2)",
            },
          },
        },
        gray: {
          40: "#666666",
          100: "#F2F2F2",
          150: "#ABBED1",
          200: "#D9D9D9",
          300: "#BABFD1",
          400: "#717171",
          blue: "#ABBED1",
          dark: "#273444",
          light: {
            DEFAULT: "#717171",
            100: "#F2F2F2",
          },
          philippine: "#909090",
          opacity: {
            50: "rgba(137, 147, 158, 0.5)",
            60: "rgba(113, 113, 113, 0.6)",
          },
          status: {
            inactive: {
              opacity10: "rgba(113, 113, 113, 0.1)",
            },
          },
        },
        green: {
          100: "#E7F7E8",
          500: "#13ce66",
          active: "#44AE12",
          success: "#009262",
          opacity: {
            13: "rgba(36, 172, 2, 0.13)",
            10: "rgba(36, 172, 2, 0.1)",
          },
        },
        black: {
          400: "#4D4D4D",
          500: "#212121",
          600: "#080917",
          opacity: {
            50: "rgba(0, 0, 0, 0.5)",
          },
        },
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: {
          400: "#F09815",
          DEFAULT: "#ff7849",
          opacity10: "rgba(240, 152, 21, 0.1)",
        },
        yellow: {
          DEFAULT: "#ffc82c",
          alert: "#FFA826",
          opacity39: "rgba(255, 209, 90, 0.39)",
        },
        neutral: {
          grey: "#717171",
        },
        red: {
          100: "#F0857D",
          500: "#C33025",
          opacity40: "rgba(215, 69, 50, 0.4)",
        },
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        satisfy: ["Satisfy", "serif"],
        roboto: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "2xl": "0px 4px 4px rgba(0, 0, 0, 0.05)",
        "3xl": "0px 2px 4px 0px rgba(216, 223, 231, 0.60)",
      },
      fontSize: {
        13: "0.8125rem",
        32: "2rem",
      },
      width: {
        81: "328px",
      },

      gap: {
        20: "20px",
        30: "30px",
      },
      padding: {
        14: "14px",
        18: "18px",
        26: "26px",
        34: "34px",
      },
      spacing: {
        30: "30px",
      },
    },
  },
  plugins: [],
};
