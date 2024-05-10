import { Metadata } from "next";
import { Cabin, Source_Code_Pro } from "next/font/google";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Simon's Portfolio",
};

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-pro",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${cabin.variable} ${sourceCodePro.variable}`}>
      <body className="font-cabin">{children}</body>
    </html>
  );
};

export default RootLayout;
