/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.tsx',
        './index.html'
    ],
    theme: {
        extend: {
            fontFamily: {
                logo: ['Work Sans', 'ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"']
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

