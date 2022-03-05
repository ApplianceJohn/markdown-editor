import { useState } from "react";
import * as marked from 'marked';
import DOMPurify from 'dompurify';
import Card from './Card';
import Editor from './Editor';
import Preview from './Preview';

//Support carriage returns
marked.setOptions({
	breaks: true
});

export default function App(props) {
  const init = `# Minimal Markdown Editor\n## A React Applet for freeCodeCamp\n![freecodecamp](https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.svg)\n\nThis applet uses \`marked.js\` to parse content.\nTo include it in your own work, use:\n\`\`\`\nimport { marked } from "https://cdn.skypack.dev/marked@latest";\n//Support carriage returns\nmarked.setOptions({\n	breaks: true\n});\n\`\`\`\nIt's important to note that Marked **does not sanitize!** You need to use an external plugin or library, such as [DOMPurify](https://github.com/cure53/DOMPurify):\n> DOMPurify - a DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG. DOMPurify works with a secure default, but offers a lot of configurability and hooks.\n### Find me online at:\n- [Twitter](https://twitter.com/rinsethewax)\n- [Github](https://github.com/ApplianceJohn)`;

  const [editorInput, setEditorInput] = useState(init);
  const [editorOutput, setEditorOutput] = useState({
    __html: marked.parse(init),
  });

  //Called on <Editor /> textarea change
  const handleInput = (e) => {
    const newInp = e.target.value;
    const newOut = { __html: DOMPurify.sanitize(marked.parse(newInp)) };
    setEditorInput(newInp);
    setEditorOutput(newOut);
  };

  return (
    <div className="row gx-4 gy-4 justify-content-center">
      <div className="col-md-4">
        <Card title="Input">
          <Editor handler={handleInput} input={editorInput} />
        </Card>
      </div>
      <div className="col-md-8">
        <Card title="Output">
          <Preview output={editorOutput} />
        </Card>
      </div>
    </div>
  );
}
