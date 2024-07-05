import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode } from "react";
import theme from "@/app/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/";
import MenuWrapper from "@/components/menu-wrapper";

export const metadata: Metadata = {
  title: "Javascript tutorial",
  description: "Created by Kucharsky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body>
            <MenuWrapper>{children}</MenuWrapper>
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
