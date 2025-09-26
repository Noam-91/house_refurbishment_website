/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./App.tsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Open Sans', 'system-ui', 'sans-serif'],
                'heading': ['Lato', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}