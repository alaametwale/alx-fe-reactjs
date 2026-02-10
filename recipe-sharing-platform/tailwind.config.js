/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",         // موجود أصلًا
    "./src/**/*.{js,jsx,ts,tsx}", // موجود أصلًا
    "./public/index.html"   // لازم نضيفه عشان التست يعدّي
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
