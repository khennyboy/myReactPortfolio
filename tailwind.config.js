export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rotate: 'rotate 1.5s infinite linear',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }, colors: {
        light: {
          grey_0: '#fff',
          grey_50: '#f9fafb',
          grey_100: '#f3f4f6',
          grey_200: '#e5e7eb',
          grey_300: '#d1d5db',
          grey_400: '#9ca3af',
          grey_500: '#6b7280',
          grey_600: '#4b5563',
          grey_700: '#374151',
          grey_800: '#1f2937',
          grey_900: '#111827',
          blue_100: '#e0f2fe',
          blue_700: '#0369a1',
          green_10: '#dcfce7',
          green_700: '#15803d',
          yellow_100: '#fef9c3',
          yellow_700: '#a16207',
          silver_100: '#e5e7eb',
          silver_700: '#374151',
          indigo_100: '#e0e7ff',
          indigo_700: '#4338ca',
          red_100: '#fee2e2',
          red_700: '#b91c1c',
          red_800: '#991b1b',
        },
        dark: {
          grey_0: "#18212f",
          grey_50: " #111827",
          grey_100: "#1f2937",
          grey_200: "#374151",
          grey_300: "#4b5563",
          grey_400: "#6b7280",
          grey_500: "#9ca3af",
          grey_600: "#d1d5db",
          grey_700: "#e5e7eb",
          grey_800: "#f3f4f6",
          grey_900: "#f9fafb",
          blue_100: "#075985",
          blue_700: "#e0f2fe",
          green_100: "#166534",
          green_700: "#dcfce7",
          yellow_100: "#854d0e",
          yellow_700: "#fef9c3",
          silver_100: "#374151",
          silver_700: "#f3f4f6",
          indigo_100: "#3730a3",
          indigo_700: " #e0e7ff",
          red_100: "#fee2e2",
          red_700: "#b91c1c",
          red_800: "#991b1b",
        },
        normal: {
          brand_50: "#eef2ff",
          brand_100: "#e0e7ff",
          brand_200: "#c7d2fe",
          brand_500: "#6366f1",
          brand_600: "#4f46e5",
          brand_700: "#4338ca",
          brand_800: "#3730a3",
          brand_900: "#312e81",
        }
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif']
      },
      screens: {
        tablet: '55em',
        desktop: { max: '94em', min: '75.1em' },
        smallMobile: { max: '22.5em' }
      },
    },
  },
  plugins: [],
}
