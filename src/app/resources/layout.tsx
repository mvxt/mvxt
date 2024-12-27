import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - Michael Vinh Xuan Thanh",
  description: "Random useful links and resources collected by Michael over the years."
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
