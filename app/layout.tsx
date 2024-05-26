import type { Metadata } from "next";
import "./globals.css";
import HeaderApp from "@/components/HeaderApp";
import { Raleway } from "next/font/google";

export const metadata: Metadata = {
  title: "DECASULT RH",
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
      <body className={raleway.className}>
        <HeaderApp />
        <div className="w-3/4 mx-auto">{children}</div>
      </body>
    </html>
  );
}
