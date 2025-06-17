"use client";

import { Footer } from "~/components/Footer";

export default function WithFooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}