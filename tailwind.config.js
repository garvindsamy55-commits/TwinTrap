/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#080c14',
          card: '#0f172a',
          border: '#1e293b',
          cyan: '#00f0ff',
          purple: '#7000ff',
          pink: '#ff007f',
          green: '#00ff88',
          yellow: '#ffcc00',
          red: '#ff3366',
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.4)',
        'neon-purple': '0 0 20px rgba(112, 0, 255, 0.4)',
        'neon-red': '0 0 20px rgba(255, 51, 102, 0.4)',
        'neon-green': '0 0 20px rgba(0, 255, 136, 0.4)',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(112, 0, 255, 0.1) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      }
    },
  },
  plugins: [],
}
