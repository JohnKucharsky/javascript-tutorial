import { Box, Typography } from "@mui/material";

export default function OrderedList({ itemsList }: { itemsList: string[] }) {
  return (
    <Box component={"ol"}>
      {itemsList.map((item) => (
        <Typography key={item} component={"li"} variant={"body2"} gutterBottom>
          {item}
        </Typography>
      ))}
    </Box>
  );
}
