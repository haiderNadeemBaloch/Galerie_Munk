/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  darkMode: 'class',
  content: [
    // PAGE 01
    "./index.html",
    "./pages/kunstdrucke.html",
    "./pages/kunstler.html",
    "./pages/kunststile.html",
    "./pages/themen.html",
    "./pages/gemaelde_kunstler.html",
    "./pages/shoppage_stil1.html",
    "./pages/shoppage_stil2.html",
    "./pages/shoppage-kuenstler.html",
    "./pages/landschaft.html",
    "./pages/details-page.html",
    "./pages/details-page2.html",
    "./pages/kuenstler_a-z.html",
    "./pages/gelborange.html",
    "./pages/bewertungen.html",
    "./pages/druckmaterialien.html",
    "./pages/sammlungen.html",
    "./pages/modern-print.html",
    "./pages/leinwandbild.html",
    "./pages/artist-biography.html",
    // PAGE 02
    "./pages2/login.html",
    "./pages2/studio-page1.html",
    "./pages2/studio-page2.html",
    "./pages2/studio-page3.html"

  ],
  // content:["*"],
  theme: {
    colors: {
      red: {
        50: "#FEF2F2",
        100: "#FEE2E2",
        200: "#FECACA",
        300: "#FCA5A5",
        400: "#F87171",
        500: "#EF4444",
        600: "#DC2626",
        700: "#B91C1C",
        800: "#991B1B",
        900: "#7F1D1D",
      },
      yellow: {
        50: "#FFFBEB",
        100: "#FEF3C7",
        200: "#FDE68A",
        300: "#FCD34D",
        400: "#FBBF24",
        500: "#F59E0B",
        600: "#D97706",
        700: "#B45309",
        800: "#92400E",
        900: "#78350F",
      },
      blue: {
        50: "#EFF6FF",
        100: "#DBEAFE",
        200: "#BFDBFE",
        300: "#93C5FD",
        400: "#60A5FA",
        500: "#3B82F6",
        600: "#2563EB",
        700: "#1D4ED8",
        800: "#1E40AF",
        900: "#1E3A8A",
      },
      green: {
        50: "#F0FDF4",
        100: "#DCFCE7",
        200: "#BBF7D0",
        300: "#86EFAC",
        400: "#4ADE80",
        500: "#22C55E",
        600: "#16A34A",
        700: "#15803D",
        800: "#166534",
        900: "#14532D",
      },
      truegray: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
      coolgray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
      white: '#FFFFFF'
    },
    spacing: {

      'px': '1',
      '0.5': '0.125rem',
      '1': '0.25rem',
      '1.5': '0.375rem',
      '2': '0.5rem',
      '2.5': '0.625rem',
      '3': '0.75rem',
      '3.5': '0.875rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '44': '11rem',
      '48': '12rem',
      '52': '13rem',
      '56': '14rem',
      '60': '15rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '96': '24rem'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1203px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
extend: {
  fontFamily: {
    'mono': ['FogtwoNo'],
    'sans': ['Montserrat'],
  }
},
  },
plugins: [
  function ({ addUtilities }) {
    addUtilities({
      '.gradient-border-bottom': {
        position: 'relative',
        paddingBottom: '2px', /* Adjust padding to match border width */
      },
      '.gradient-border-bottom::after': {
        content: '""',
        position: 'absolute',
        left: '0',
        bottom: '0',
        width: '100%',
        height: '2px', /* Adjust height to match border width */
        background: 'linear-gradient(to right, #16A34A, transparent)',
      },


      '.gradient-border-bottom-2': {
        position: 'relative',
        paddingBottom: '10px', /* Adjust padding to match border width */
      },
      '.gradient-border-bottom-2::after': {
        content: '""',
        position: 'absolute',
        left: '0',
        bottom: '0',
        width: '100%',
        height: '2px', /* Adjust height to match border width */
        background: 'linear-gradient(to right, transparent, #16A34A, transparent)',
      },
    });
  },
],
}

