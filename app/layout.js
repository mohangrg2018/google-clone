import "./globals.css";

export const metadata = {
  title: "Google Clone",
  description: "Search anything here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
