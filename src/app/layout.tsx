import type { Metadata } from "next";
import { Inter,Calistoga,DM_Sans } from "next/font/google"
import "./globals.css";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const inter = Inter({subsets: ["latin"], variable: "--font-sans"});
const dmSans = DM_Sans({subsets: ["latin"]});
const calistoga = Calistoga({subsets: ['latin'], variable: "--font-sans",weight: ["400"]});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={twMerge(inter.className,calistoga.className,"bg-gray-900 text-white antialiased")}>{children}</body> */}
      <body className={clsx(dmSans.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
