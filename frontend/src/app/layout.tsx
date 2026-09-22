import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-bice-iota-pwm6m81wge.vercel.app"),
  title: {
    default: "Antonio Sánchez | Software Developer",
    template: "%s | Antonio Sánchez"
  },
  description: "Portfolio of Antonio Sánchez, Junior Software Developer specialized in backend and Flutter mobile development.",
  openGraph: {
    title: "Antonio Sánchez | Software Developer",
    description: "Portfolio of Antonio Sánchez, Junior Software Developer specialized in backend and Flutter mobile development.",
    url: "https://portfolio-bice-iota-pwm6m81wge.vercel.app",
    siteName: "Antonio Sánchez Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Antonio Sánchez Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
