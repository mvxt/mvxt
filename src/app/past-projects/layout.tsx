import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Past Projects - Michael Vinh Xuan Thanh",
  description: "Michael has been experimental and active in a wide variety of past side projects. Read about them here."
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
