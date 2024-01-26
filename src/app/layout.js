import { Roboto } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/Provider/AuthProvider";
import { Toaster } from "react-hot-toast";

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
    <html lang="en" data-theme={"night"}>
      <body className={`${roboto.className}`}>
      <Toaster></Toaster>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
