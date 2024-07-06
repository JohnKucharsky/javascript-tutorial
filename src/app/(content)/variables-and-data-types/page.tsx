import type { Metadata } from "next";

import { Box, Typography } from "@mui/material";
import SyntaxEl from "@/components/SyntaxEl";
import BlueSyntax from "@/components/BlueSyntax";

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
      <Box component={"ol"}>
        <Typography component={"li"} variant={"body2"} gutterBottom>
          The name must contain only letters, digits, or the symbols{" "}
          <BlueSyntax>$</BlueSyntax> and <BlueSyntax>_</BlueSyntax>.
        </Typography>
        <Typography component={"li"} variant={"body2"} gutterBottom>
          The first character must not be a digit.
        </Typography>
      </Box>
      <Typography variant={"body2"} mb={2}>
        What’s interesting – the dollar sign <BlueSyntax>$</BlueSyntax> and the
        underscore <BlueSyntax>_</BlueSyntax> can also be used in names. They
        are regular symbols, just like letters, without any special meaning.
      </Typography>

      <SyntaxEl codeString={codeString1} />
      <Typography variant={"body2"} mb={2}>
        Examples of incorrect variable names:
      </Typography>

      <SyntaxEl codeString={codeString2} />

      <Typography variant={"h5"} gutterBottom mt={2}>
        Data types
      </Typography>
      <Typography variant={"body2"} mb={2}>
        There are 8 basic data types in JavaScript.
      </Typography>
      <Box component={"ol"} pl={2}>
        <Typography component={"li"} variant={"body2"} gutterBottom>
          Seven primitive data types:
        </Typography>
        <Box component={"ul"} pl={2}>
          <Typography component={"li"} variant={"body2"} gutterBottom>
            <BlueSyntax>number</BlueSyntax> for numbers of any kind: integer or
            floating-point, integers are limited by ±(253-1).
          </Typography>
          <Typography component={"li"} variant={"body2"} gutterBottom>
            <BlueSyntax>bigint </BlueSyntax> for integer numbers of arbitrary
            length.
          </Typography>
          <Typography component={"li"} variant={"body2"} gutterBottom>
            <BlueSyntax>string</BlueSyntax> for strings. A string may have zero
            or more characters, there’s no separate single-character type.
          </Typography>
          <Typography component={"li"} variant={"body2"} gutterBottom>
            <BlueSyntax>boolean</BlueSyntax> for true/false.
          </Typography>
          <Typography component={"li"} variant={"body2"} gutterBottom>
            <BlueSyntax>null</BlueSyntax> for unknown values – a standalone type
            that has a single value <BlueSyntax>null</BlueSyntax>.
          </Typography>
          <Typography component={"li"} variant={"body2"} gutterBottom>
            <BlueSyntax>undefined</BlueSyntax> for unassigned values – a
            standalone type that has a single value{" "}
            <BlueSyntax>undefined</BlueSyntax>.
          </Typography>
          <Typography component={"li"} variant={"body2"} gutterBottom>
            <BlueSyntax>symbol</BlueSyntax> for unique identifiers.
          </Typography>
        </Box>
        <Typography component={"li"} variant={"body2"} gutterBottom>
          And one non-primitive data type:
        </Typography>
        <Box component={"ul"} pl={2}>
          <Typography component={"li"} variant={"body2"} gutterBottom>
            <BlueSyntax>object</BlueSyntax> for more complex data structures.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

const codeString1 = `let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"`;
const codeString2 = `let 1a; // cannot start with a digit
let my-name; // hyphens '-' aren't allowed in the name`;
