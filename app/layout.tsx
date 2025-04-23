import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "迅鸟ERP - 跨境电商管理系统",
  description:
    "迅鸟ERP,跨境电商管理系统,多平台多店铺智能管家，库存、订单、物流一屏掌控.",
  keywords: [
    "跨境电商",
    "跨境电商ERP",
    "亚马逊",
    "亚马逊跨境电商",
    "亚马逊卖家",
    "亚马逊多店铺",
    "跨境电商多店铺",
    "亚马逊多店铺防关联",
    // "Landing Page Template",
    // "Landing Page Design",
  ],
  openGraph: {
    type: "website",
    siteName: "xunniao",
    locale: "en_US",
    url: "https://shadcn-landing-page.vercel.app",
    title: "xuniao erp",
    description:
      "迅鸟ERP,跨境电商管理系统,多平台多店铺智能管家，库存、订单、物流一屏掌控.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "xuniao Page Preview",
      },
    ],
  },
  authors: [
    {
      name: "Akash Moradiya",
      url: "https://shadcnui-blocks.com",
    },
  ],
  creator: "Akash Moradiya",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
