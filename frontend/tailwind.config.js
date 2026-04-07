/** @type {import('tailwindcss').Config} */
export default {
  // 1. Tell Tailwind where to look for your classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",         // For Next.js App Router
    "./components/**/*.{js,ts,jsx,tsx}",  // For your React components
  ],
  theme: {
    extend: {
      // 2. Custom Typography
      fontFamily: {
        // Sets Inter as the default for all standard text (p, h1, h2, etc.)
        sans: ['Inter', 'sans-serif'],
        // Sets JetBrains Mono for your technical tags and dates
        mono: ['JetBrains Mono', 'monospace'],
      },
      // 3. Custom Color Palette (Optional but helpful for that SaaS look)
      colors: {
        // These match the deep blacks and sleek borders from your project cards
        appTheme: {
          bg:'#1d1d1d',        // The ultra-dark background
          surface: '#111111',   // The slightly lighter card background
          border: '#1e293b',    // The subtle slate border
        }
      },
      // 4. Custom Animations (Great for hover states on your tech tags)
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}