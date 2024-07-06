import MenuPage from "@/components/menu-page";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Menu",
};

export default function Home() {
  return (
    <Suspense>
      <MenuPage />
    </Suspense>
  );
}
