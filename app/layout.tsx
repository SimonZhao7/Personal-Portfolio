import { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Simon's Portfolio",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
