import type { Metadata } from "next";
import { Italiana, Poppins } from "next/font/google";
import "./globals.css";
// import RUMInit from "./UI/components/RUMinit";

const italiana = Italiana({
  variable: "--font-italiana",
  weight: "400",
  subsets: ["latin"],
  display:'swap'
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
    url: "https://lasbouq.com",
    logo: "https://lasbouq.com/icon.png",
    description:
      "Premium flexible workspaces for startups, remote teams, and creative professionals.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lasbouq Workspace Agency",
    url: "https://lasbouq.com",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="6vZFEPb6_9ZFGe-60NuyLYckCeTVZlgnAkaOriX5P7Y"
        />
      </head>
      <body className={`${italiana.variable} ${poppins.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {/* <RUMInit /> */}
        {children}
      </body>
    </html>
  );
}
