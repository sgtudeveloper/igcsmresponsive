import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Computer Franchisee Network || IGCSM",
  description:
    "is a not-for-profit organization dedicated to empowering underprivileged communities    across India through education, skill development, and microfinance initiatives. Established in 2008 and headquartered in Delhi, IGCSM operates in over 21 states, impacting more than 500,000 people, including children, youth, and women. With a network of 500+",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
