module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          50: "#ECFFFE", // Very light teal
          100: "#CFFFFE", // Light teal
          200: "#A5FFFC", // Medium light teal
          300: "#67FFF9", // Medium teal
          400: "#22FFF3", // Bright teal
          500: "#12FFE8", // Electric teal - base
          600: "#00E6D1", // Darker teal
          700: "#00B8A9", // Deep teal
          800: "#008B7A", // Very deep teal
          900: "#00574A", // Darkest teal
          DEFAULT: "#12FFE8", // Electric teal
        },
        // Secondary Colors
        secondary: {
          50: "#F5F5F5", // Very light gray
          100: "#E5E5E5", // Light gray
          200: "#D4D4D4", // Medium light gray
          300: "#A3A3A3", // Medium gray
          400: "#737373", // Dark medium gray
          500: "#525252", // Dark gray
          600: "#404040", // Very dark gray
          700: "#262626", // Deep gray
          800: "#1A1A1A", // Elevated surface - base
          900: "#0A0A0A", // Darkest gray
          DEFAULT: "#1A1A1A", // Elevated surface color
        },
        // Accent Colors
        accent: {
          50: "#ECFDF8", // Very light accent
          100: "#D1FAE5", // Light accent
          200: "#A7F3D0", // Medium light accent
          300: "#6EE7B7", // Medium accent
          400: "#34D399", // Bright accent
          500: "#00D4AA", // Warmer teal - base
          600: "#00B894", // Darker accent
          700: "#009B7D", // Deep accent
          800: "#007A63", // Very deep accent
          900: "#005A4A", // Darkest accent
          DEFAULT: "#00D4AA", // Warmer teal variant
        },
        // Background Colors
        background: "#0E0E0E", // Deep background
        surface: "#161616", // Card and component background
        // Text Colors
        text: {
          primary: "#FFFFFF", // Pure white
          secondary: "#A3A3A3", // Neutral gray - gray-400
        },
        // Status Colors
        success: {
          50: "#F0FDF4", // Very light success
          100: "#DCFCE7", // Light success
          200: "#BBF7D0", // Medium light success
          300: "#86EFAC", // Medium success
          400: "#4ADE80", // Bright success
          500: "#22C55E", // Success - base - green-500
          600: "#16A34A", // Darker success
          700: "#15803D", // Deep success
          800: "#166534", // Very deep success
          900: "#14532D", // Darkest success
          DEFAULT: "#22C55E", // Clear positive feedback - green-500
        },
        warning: {
          50: "#FFFBEB", // Very light warning
          100: "#FEF3C7", // Light warning
          200: "#FDE68A", // Medium light warning
          300: "#FCD34D", // Medium warning
          400: "#FBBF24", // Bright warning
          500: "#F59E0B", // Warning - base - amber-500
          600: "#D97706", // Darker warning
          700: "#B45309", // Deep warning
          800: "#92400E", // Very deep warning
          900: "#78350F", // Darkest warning
          DEFAULT: "#F59E0B", // Attention-grabbing amber - amber-500
        },
        error: {
          50: "#FEF2F2", // Very light error
          100: "#FEE2E2", // Light error
          200: "#FECACA", // Medium light error
          300: "#FCA5A5", // Medium error
          400: "#F87171", // Bright error
          500: "#EF4444", // Error - base - red-500
          600: "#DC2626", // Darker error
          700: "#B91C1C", // Deep error
          800: "#991B1B", // Very deep error
          900: "#7F1D1D", // Darkest error
          DEFAULT: "#EF4444", // High-contrast red - red-500
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(18, 255, 232, 0.1)',
        'depth': '0 4px 6px rgba(0, 0, 0, 0.3)',
        'elevation': '0 10px 25px rgba(0, 0, 0, 0.3)',
        'glow-primary': '0 0 20px rgba(18, 255, 232, 0.1)',
        'glow-accent': '0 0 20px rgba(0, 212, 170, 0.1)',
      },
      borderColor: {
        'subtle': 'rgba(255, 255, 255, 0.1)',
        'active': 'rgba(18, 255, 232, 0.3)',
      },
      transitionDuration: {
        '200': '200ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out',
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideUp 400ms ease-in-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(18, 255, 232, 0.1)' },
          '100%': { boxShadow: '0 0 30px rgba(18, 255, 232, 0.2)' },
        },
      },
    },
  },
  plugins: [],
}