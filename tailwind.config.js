// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    colors:{
      green:"#00925D",
      gray:"#9CA4AB",
      gray_100:"#E5E7EB",
      rose:"#EB3F5E",
      red:"#BE123C",
      white:"#FFFFFF",
      bl_700:"#28262D",
      bl_800:"#0D0C0F",
      bl_900:"#08080A",
    }
  },
  plugins: [],
}
