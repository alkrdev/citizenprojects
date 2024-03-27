import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Citizen Projects",
  description: "A Web Application to look up projects",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {

  return (
    <html lang="en" className=" bg-slate-500 px-96">
      <body className={`font-sans ${inter.variable} bg-white px-10 pt-5`}>{children}</body>
    </html>
  );
}
