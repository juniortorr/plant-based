/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth-pages': "url('/login-background.jpg')",
        'trees-background': "url('/trees-background.jpg')",
      },
      colors: {
        accent: '#C4804A',
        green: '#3E4D32',
      },
      height: {
        '1/3': '250px',
      },
    },
  },
  plugins: [],
};