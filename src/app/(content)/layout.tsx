import { ReactNode } from "react";
import { Box } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Box maxWidth="lg" mx="auto" py={6} px={{ xs: 1, sm: 2, md: 4 }}>
      {children}
    </Box>
  );
}
