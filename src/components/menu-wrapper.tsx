"use client";
import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";
import MenuPage from "@/components/menu-page";

export default function MenuWrapper({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();

  const menuOpened = searchParams.has("map");

  if (menuOpened) {
    return <MenuPage />;
  }

  return children;
}
