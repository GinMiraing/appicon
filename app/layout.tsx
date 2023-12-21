import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: `应用图标站`,
  description: `应用图标下载站`,
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <link
          rel="stylesheet"
          href="https://s1.hdslb.com/bfs/static/jinkela/long/font/medium.css"
        />
        <link
          rel="stylesheet"
          href="https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css"
        />
      </head>
      <body className="bg-background font-regular text-primary">
        <main className="mx-auto max-w-3xl px-6 pt-20">{children}</main>
      </body>
    </html>
  );
}
