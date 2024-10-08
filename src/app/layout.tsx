import "./globals.css";
import { Poppins, Alegreya } from "next/font/google";
import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/layout/NavBar";
import { cookies } from "next/headers";

const alegreya = Alegreya({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next app",
  description: "Generated by Create Next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const logedUsernameCookie = cookies().get('SocialUsername');


  return (
    <html lang="en" className={`w-full h-full ${poppins.variable} `}>
      <body className={`${poppins.className}  w-full h-full `}>
        <NavBar logedUsername={logedUsernameCookie?.value}/>
        {children}
      </body>
    </html>
  );
}
