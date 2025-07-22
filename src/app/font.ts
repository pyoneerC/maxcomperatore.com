import localFont from "next/font/local";

export const GeistSans = localFont({
  src: [{ path: "./fonts/Geist-Variable.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-geist-sans",
  display: "swap",
});

export const GeistMono = localFont({
  src: [{ path: "./fonts/GeistMono-Variable.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-geist-mono",
  display: "swap",
});
