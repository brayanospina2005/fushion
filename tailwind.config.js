/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(248,112,160,1)',
        // Puedes agregar más colores personalizados aquí si lo deseas
      },
    },
  },
  plugins: [],
};
