import { Box, Grid, IconButton, Link, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";

const links = {
  "/variables-and-data-types": "Variables and data types",
} as const;

export default function MenuPage() {
  const pathname = usePathname();

  return (
    <Box maxWidth={"lg"} mx={"auto"} px={4}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        py={3}
      >
        <Typography variant={"h4"} py={3}>
          Menu
        </Typography>
        <IconButton component={Link} href={pathname}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Grid container spacing={1}>
        {Object.entries(links).map(([link, title]) => (
          <Grid key={link} item xs={12} sm={6} md={4}>
            <Link color={"inherit"} underline={"hover"} href={link}>
              {title}
            </Link>
          </Grid>
        ))}
      </Grid>{" "}
    </Box>
  );
}
