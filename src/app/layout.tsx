import "./globals.css";
import type { Metadata } from "next";

import { inter } from "./fonts";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Partnership Broshure",
  description: "Best Capture The Flag partnership offer",
};
import { ThemeProvider } from "@/components/ColorTheme/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
