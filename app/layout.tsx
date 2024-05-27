import type { Metadata } from "next";
import "./globals.css";
import HeaderApp from "@/components/HeaderApp";
import { Raleway } from "next/font/google";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Recrutement - Decasult",
  description: "",
};

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/decasultico.jpg" />
      </head>
      <body className={raleway.className}>
        <HeaderApp />
        <Toaster richColors closeButton />
        <div className="w-full md:w-3/5 mx-auto">{children}</div>
      </body>
    </html>
  );
}
