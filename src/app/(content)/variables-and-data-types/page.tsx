import type { Metadata } from "next";

import { Typography } from "@mui/material";
import OrderedList from "@/components/ordered-list";
import SyntaxEl from "@/components/SyntaxEl";

export const metadata: Metadata = {
  title: "Variables and data types",
};

export default function VariablesAndDataTypes() {
  return (
    <>
      <Typography variant={"h5"} gutterBottom>
        Variable naming
      </Typography>
      <Typography variant={"body2"} gutterBottom>
        There are two limitations on variable names in JavaScript:
      </Typography>
      <OrderedList
        itemsList={[
          "The name must contain only letters, digits, or the symbols $ and _.",
          "The first character must not be a digit.",
        ]}
      />
      <Typography variant={"body2"} mb={2}>
        What’s interesting – the dollar sign $ and the underscore _ can also be
        used in names. They are regular symbols, just like letters, without any
        special meaning.
      </Typography>

      <SyntaxEl
        codeString={`let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"`}
      />
      <Typography variant={"body2"} mb={2}>
        Examples of incorrect variable names:
      </Typography>

      <SyntaxEl
        codeString={`let 1a; // cannot start with a digit
let my-name; // hyphens '-' aren't allowed in the name`}
      />
    </>
  );
}
