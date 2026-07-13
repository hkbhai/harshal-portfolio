/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: {
          DEFAULT: 'rgb(var(--bg-default-rgb) / <alpha-value>)',
          surface: 'rgb(var(--bg-surface-rgb) / <alpha-value>)',
          card:    'rgb(var(--bg-card-rgb) / <alpha-value>)',
          hover:   'rgb(var(--bg-hover-rgb) / <alpha-value>)',
          subtle:  'rgb(var(--bg-subtle-rgb) / <alpha-value>)',
        },
        foreground: {
          DEFAULT:   'rgb(var(--text-primary-rgb) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary-rgb) / <alpha-value>)',
          muted:     'rgb(var(--text-muted-rgb) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'rgb(var(--primary-rgb) / <alpha-value>)',
          hover:   'rgb(var(--primary-hover-rgb) / <alpha-value>)',
          glow:    'var(--primary-glow)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent-rgb) / <alpha-value>)',
          glow:    'var(--accent-glow)',
        },
        border: {
          DEFAULT: 'rgb(var(--border-default-rgb) / calc(<alpha-value> * var(--border-default-alpha)))',
          strong:  'rgb(var(--border-strong-rgb) / calc(<alpha-value> * var(--border-strong-alpha)))',
          subtle:  'rgb(var(--border-subtle-rgb) / calc(<alpha-value> * var(--border-subtle-alpha)))',
        },
        success: 'rgb(var(--success-rgb) / <alpha-value>)',
        warning: 'rgb(var(--warning-rgb) / <alpha-value>)',
        error:   'rgb(var(--error-rgb) / <alpha-value>)',
      },

      // Inter first — the gold standard for developer-focused UIs (Vercel/Linear/Stripe)
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      fontSize: {
        // Hero — tight & impactful
        'hero':        ['54px',  { lineHeight: '1.08', letterSpacing: '-0.035em', fontWeight: '700' }],
        'hero-tablet': ['40px',  { lineHeight: '1.12', letterSpacing: '-0.025em', fontWeight: '700' }],
        'hero-mobile': ['28px',  { lineHeight: '1.20', letterSpacing: '-0.02em',  fontWeight: '700' }],

        // Section headings
        'heading-1': ['42px', { lineHeight: '1.12', letterSpacing: '-0.025em' }],
        'heading-2': ['30px', { lineHeight: '1.18', letterSpacing: '-0.02em'  }],
        'heading-3': ['24px', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        'heading-4': ['18px', { lineHeight: '1.32', letterSpacing: '-0.01em'  }],

        // Body
        'body-lg': ['17px', { lineHeight: '1.75' }],
        'body':    ['15px', { lineHeight: '1.75' }],
        'caption': ['13px', { lineHeight: '1.55', letterSpacing: '0.01em'  }],
        'small':   ['11px', { lineHeight: '1.45', letterSpacing: '0.025em' }],
      },

      spacing: {
        13: '52px',
        18: '72px',
        22: '88px',
        26: '104px',
        30: '120px',
      },

      borderRadius: {
        sm:   '6px',
        md:   '10px',
        lg:   '14px',
        xl:   '20px',
        '2xl':'28px',
      },

      boxShadow: {
        card:            'var(--shadow-card)',
        'card-hover':    'var(--shadow-card-hover)',
        glow:            'var(--shadow-glow)',
        'glow-sm':       '0 0 24px rgba(99, 102, 241, 0.22)',
        navbar:          'var(--shadow-navbar)',
      },

      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-7px)' },
        },
        'ping-slow': {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
      },

      animation: {
        'gradient-shift':  'gradient-shift 8s ease infinite',
        float:             'float 6s ease-in-out infinite',
        'float-delayed':   'float-delayed 5s ease-in-out infinite 1s',
        'ping-slow':       'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },

      maxWidth: {
        container:    '1200px',
        'container-lg': '1320px',
      },

      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
        smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
};
