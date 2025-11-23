/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        script: ['Great Vibes', 'cursive'],
        arabic: ['Amiri', 'serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
        fadeIn: 'fadeIn 1.2s ease-in-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        heartbeat: {
          '0%,100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}