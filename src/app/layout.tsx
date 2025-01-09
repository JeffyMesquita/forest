import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forest",
  description: "Venha Experimentar a vida na Floresta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-behavior-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`px-4 font-sans bg-verde-800`}>{children}</body>
    </html>
  );
}
