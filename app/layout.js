import Footer from "@components/Footer";
import "./globals.css";

export const metadata = {
  title: "Google Clone",
  description: "Search anything here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
