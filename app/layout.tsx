// app/layout.tsx
import { MapProvider } from "@/context/MapContext";
import "@/styles/components.css";
import "@/styles/globals.css";
import "@/styles/cluster.css";
import { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";

// Définir la police Noto Serif JP pour l'utiliser dans l'application
const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto-serif-jp",
});

export const metadata: Metadata = {
  title: "Carte interactive d'Ukiyo-e",
  description: "Explorez les lieux représentés dans les estampes japonaises ukiyo-e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={notoSerifJP.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <MapProvider>{children}</MapProvider>
      </body>
    </html>
  );
}