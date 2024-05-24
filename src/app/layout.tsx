"use client";
import { useReducer } from "react";
import { Providers } from "@/redux/provider";
import Header from "@/components/Header";
import "./globals.css";

const metadata = {
  title: "Countries Information",
  description: "countries information app",
};

export default function RootLayout({ children }: ChildrenProps) {
  const [darkMode, setDarkMode] = useReducer(
    (darkMode: boolean) => !darkMode,
    false
  );

  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className={`${darkMode ? "dark" : "light"}`}>
        <Header mode={darkMode} onClick={setDarkMode} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
