import type { Metadata } from "next";
import { Italiana, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./(pages)/home/Footer";

const italiana = Italiana({
  variable: "--font-italiana",
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "300",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Lasbouq",
  description: "A agency platform for providing workspaces to teams",
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lasbouq Workspace Agency",
    url: "http://localhost:3000",
    logo: "http://localhost:3000/icon.png",
    description:
      "Premium flexible workspaces for startups, remote teams, and creative professionals.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lasbouq Workspace Agency",
    url: "hhttp://localhost:3000",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${italiana.variable} ${poppins.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
