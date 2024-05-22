import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music - Michael Vinh Xuan Thanh",
  description: "Michael was active in band through all of his years of primary school. Outside of school, he played with friends in bands and continues to dabble in music composition and production."
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
