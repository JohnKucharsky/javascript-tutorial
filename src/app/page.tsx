import MenuPage from "@/components/menu-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
};

export default function Home() {
  return <MenuPage />;
}
