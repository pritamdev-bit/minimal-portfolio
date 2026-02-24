import { Geist, Geist_Mono } from "next/font/google";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Quotes from "@/components/Quotes";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"], weight: "400" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pritam - A Full Stack Web Developer",
  description:
    "This is the portfolio website of Pritam Mandal, a Full Stack Web Developer.",
  openGraph: {
    title: "Pritam - A Full Stack Web Developer",
    description:
      "This is the portfolio website of Pritam Mandal, a Full Stack Web Developer.",
    url: "https://itspritam.space",
    siteName: "Pritam - A Full Stack Web Developer",
    images: [
      {
        url: "/newimg.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${hankenGrotesk.className} ${geistSans.variable} ${geistMono.variable} dark:bg-black text-[#909092] antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Quotes />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
