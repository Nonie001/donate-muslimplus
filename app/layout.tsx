import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "สนับสนุน Muslim Plus | Donate",
  description: "สนับสนุนแอปพลิเคชัน Muslim Plus เพื่อช่วยให้มุสลิมปฏิบัติศาสนกิจได้ง่ายขึ้น",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${prompt.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
