import type { Metadata } from "next";
import { Geist, Geist_Mono, Italiana, Poppins} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const italiana = Italiana({
  variable:"--font-italiana",
  weight:"400",
  subsets:["latin"],
})

const poppins = Poppins({
  weight:"300",
  variable:"--font-poppins"
})

export const metadata: Metadata = {
  title: "Lasbouq",
  description: "A agency platform for providing workspaces to teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${italiana.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
