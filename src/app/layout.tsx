import type { Metadata } from "next";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Vinh Xuan Thanh",
  description: "Michael Vinh Xuan Thanh is a Lead Sales Engineer, software developer, and musician. Read more about his work history, projects, and other information."
};

export default function RootLayout({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
