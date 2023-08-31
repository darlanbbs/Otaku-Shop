"use client";

import { MyContextProvider } from "@/contexts/FilterContext";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "HomePage",
  description: "HomePage",
};
const client = new QueryClient();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
      </head>

      <body className={inter.className}>
        <Navbar />
        <QueryClientProvider client={client}>
          <MyContextProvider>{children}</MyContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
