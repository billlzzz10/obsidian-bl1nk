import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clarity UI Studio",
  description: "Build beautiful UIs, declaratively.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
