import { useState } from 'react'
import './App.css'
import { Editor } from './components/Editor'
import { Previewer } from './components/Previewer'

function App() {
  const initialMarkdown = `\# Welcome to my React Markdown Previewer!

\## This is a sub-heading...
\### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`javascript
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine === '\\\`\`\`' && lastLine === '\\\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text \*\*bold\*\*... whoa!
Or \_italic\_.
Or... wait for it... \*\*_both!\*\*
And feel free to go crazy \~\~crossing stuff out\~\~.

There's also \[links\](https://www.freecodecamp.org), and
\> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1\. And there are numbered lists too.
1\. Use just 1s if you want!
1\. And last but not least, let's not forget embedded images:

\![freeCodeCamp Logo\](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
  const [input, setInput] = useState(initialMarkdown);
  const [maximized, setMaximized] = useState(false)

  const maximizePrev = e => {
    const mainDiv = document.querySelector("#main-div")

    if(!maximized) {
      mainDiv.style.display = "none";
      setMaximized(!maximized)

    } else {
      mainDiv.style.display = "flex";
      setMaximized(!maximized)
    }

  };

  const maximizeMain = e => {
    const previewDiv = document.querySelector("#preview-div")
    const textarea = document.querySelector("textarea")


    if(!maximized) {
      previewDiv.style.display = "none";
      textarea.style.minHeight = "700px";

      setMaximized(!maximized)

    } else {
      previewDiv.style.display = "flex";
      textarea.style.minHeight = "150px";

      
      setMaximized(!maximized)
    }

  };

  const handleChange = e => {
    setInput(e.target.value);
    console.log(e.target.value)
  }

  return (
    <>
      <Editor value={input} onChange={handleChange} maximize={maximizeMain}/>
      <Previewer input={input} maximize={maximizePrev} />
    </>
  )
}

export default App
