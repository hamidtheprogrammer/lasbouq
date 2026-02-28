import type { Metadata } from "next";
import { Italiana, Poppins} from "next/font/google";
import "./globals.css";
import Footer from "./(pages)/home/Footer";

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
        className={`${italiana.variable} ${poppins.variable} antialiased`}
      >
        {children}
     
      </body>
    </html>
  );
}
