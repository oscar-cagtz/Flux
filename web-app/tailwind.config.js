/** * Fold Group - Master Tailwind Configuration 
 * This uses CSS variables to allow seamless theme switching across the 9 brands.
 * @type {import('tailwindcss').Config} 
 */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic variables mapped to CSS custom properties
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          DEFAULT: "var(--brand-primary)",
          secondary: "var(--brand-secondary)",
          accent: "var(--brand-accent)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
      },
      fontFamily: {
        // Sans for engineering (Flux, Grid, Forge), Serif for heritage (Plum, Grain)
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.1em',
      },
      boxShadow: {
        'subtle': '0 4px 40px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}