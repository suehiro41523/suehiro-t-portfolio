/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ["./index.html", "./resources/**/*.{vue,js,ts,jsx,tsx,blade.php}"],
    content: [],
    darkMode: "class",
    theme: {
        colors: {
            gray: {
                50: "#F7FAFC",
                100: "#EDF2F7",
                200: "#E2E8F0",
                300: "#CBD5E0",
                400: "#A0AEC0",
                500: "#718096",
                600: "#4A5568",
                700: "#2D3748",
                800: "#1A202C",
                900: "#171923",
            },
            blue: {
                50: "#EBF8FF",
                100: "#BEE3F8",
                200: "#90CDF4",
                300: "#63B3ED",
                400: "#4299E1",
                500: "#3182CE",
                600: "#2B6CB0",
                700: "#2C5282",
                800: "#2A4365",
                900: "#1A365D",
            },
            purple: {
                300: "#B794F4",
                400: "#9F7AEA",
                600: "#2A4365",
            },
            cyan: {
                400: "#0BC5EA",
            },
            green: {
                100: "#F0FFF4",
                200: "#C6F6D5",
                300: "#68D391",
                400: "#38A169",
                500: "#48BB78",
                600: "#25855A",
                700: "#276749",
                800: "#22543D",
                900: "#1C4532",
            },
            yellow: {
                200: "#FAF089",
            },
        },
        extend: {},
    },
    plugins: [],
};
