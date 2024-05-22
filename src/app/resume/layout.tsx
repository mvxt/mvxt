import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Résumé - Michael Vinh Xuan Thanh",
  description: "Michael started his career as a software engineer before transitioning into technical solutions. Find his full technical résumé here."
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
