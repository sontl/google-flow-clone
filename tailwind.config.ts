import type {
    Config
}

    from "tailwindcss";

const config: Config = {

    // Enable dark mode based on the class attribute (we added 'dark' to <html> in layout.tsx)
    darkMode: "class",
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {

            // This connects the Next.js font loader variable (--font-inter) to Tailwind's font-sans
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            }

            ,
            // Extend colors if you want specific Google grays, but standards work fine for now
            colors: {
                neutral: {
                    850: "#1f1f1f",
                    950: "#0a0a0a", // Very dark gray for backgrounds
                }

                ,
            },
            animation: {
                "gradient-x": "gradient-x 15s ease infinite",
            },
            keyframes: {
                "gradient-x": {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
        }

        ,
    }

    ,
    plugins: [],
}

    ;
export default config;