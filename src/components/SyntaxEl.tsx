import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SyntaxEl({ codeString }: { codeString: string }) {
  return (
    <SyntaxHighlighter
      wrapLongLines
      showLineNumbers
      style={coldarkDark}
      language="typescript"
    >
      {codeString}
    </SyntaxHighlighter>
  );
}
