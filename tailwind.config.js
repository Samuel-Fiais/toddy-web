/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    'prettier-plugin-tailwindcss',
  ],
  theme: {
    extend: {
      colors: {
        'gray-blue': '#eaf1ff',
        'gray-bg': '#F9F9F9'
      },
    }
  }
}
