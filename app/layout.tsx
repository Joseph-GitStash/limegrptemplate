import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/NewHome/Header";
import Footer from "@/components/NewHome/Footer";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ['latin'],
  variable: '--font-archivo'
})

export const metadata: Metadata = {
  title: "Lime group",
  description: "Brilliant minds behind real estate investment strategies",
  keywords: ["Real estate investment", "Property auctions", "limegroup real estate"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="[&::-webkit-scrollbar]:w-2  [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:m-2 [&::-webkit-scrollbar-thumb]:bg-black">
      <body
        className={`antialiased ${archivo.variable } font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
