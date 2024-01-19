import { Roboto } from "next/font/google";
import "./globals.css";


import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Tradeswift",
  description: "Generated by Tradeswift",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={"light"}>

      <body className= {`${roboto.className} max-w-screen-xl mx-auto`}
      
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </body>

        


    </html>
  );
}
