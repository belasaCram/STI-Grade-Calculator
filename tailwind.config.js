/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    require('flowbite-react/tailwind').content()
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      scrollbar: {
        DEFAULT: 'rounded-lg',
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require('@tailwindcss/forms'),
    require('flowbite-react/tailwind').plugin()
  ],
}

