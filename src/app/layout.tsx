import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mansour Nabil — Full-Stack Developer",
  description:
    "3rd-year CS student. I build web apps, dabble in AI, and help others learn. Based in Boumerdès, Algeria.",
  keywords: [
    "Mansour Nabil",
    "Full-Stack Developer",
    "Algeria",
    "React",
    "Node.js",
    "MERN",
    "AR/VR",
  ],
  openGraph: {
    title: "Mansour Nabil — Full-Stack Developer",
    description:
      "3rd-year CS student. I build web apps, dabble in AI, and help others learn. Based in Boumerdès, Algeria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-inter antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
