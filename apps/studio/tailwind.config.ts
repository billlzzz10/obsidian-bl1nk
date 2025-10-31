import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // เพิ่ม path ไปยัง UI package ของเรา
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // เราจะมาเติมค่า theme ที่นี่ในภายหลัง
    },
  },
  plugins: [],
};
export default config;
