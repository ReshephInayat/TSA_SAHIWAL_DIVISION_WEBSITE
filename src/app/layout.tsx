import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Notification from "@/components/Notification";
import NextTopLoader from "nextjs-toploader";
import { Raleway } from "next/font/google";

const RaleWay = Raleway({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "TSA | Sahiwal Division",
  description: "The Salvation Army Sahiwal Division",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${RaleWay.className} antialiased `}>
        <main>
          <NextTopLoader color="red" height={5} />
          <Notification />
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
