import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Hamed Ajaj | Front End Developer",
  description:
    "I am a front end developer with a passion for building beautiful andaccessible web applications. I specialize in React, TypeScript, andTailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
