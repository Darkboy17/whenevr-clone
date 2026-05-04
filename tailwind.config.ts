import type { Config } from "tailwindcss";

/**
 * Tailwind Configuration
 * The content paths are set to include all files in the app and components directories
 * that have the extensions js, ts, jsx, tsx, or mdx. This ensures that Tailwind
 * can tree-shake unused styles effectively based on the actual usage in these files.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;