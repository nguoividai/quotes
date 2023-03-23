import "./globals.css";
import "@/styles/quote.scss";

export const metadata = {
  title: "Quotes",
  description: "Automated quotes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
