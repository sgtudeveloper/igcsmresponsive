import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Igcsm Franchisee",
  description: "India's No.1 Franchisee Network",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
