import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "@/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MovieDb",
  description: "Your only destination for movie recommendation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider>
          <Header/>
          {children}
      </Provider>
      </body>
    </html>
  );
}
